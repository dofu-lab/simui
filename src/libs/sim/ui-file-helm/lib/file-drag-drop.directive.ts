import { computed, Directive, HostListener, inject, input, model, OnInit, output, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hlm } from '@spartan-ng/brain/core';
import type { ClassValue } from 'clsx';

export type FileMetadata = {
	name: string;
	size: number;
	type: string;
	url: string;
	id: string;
};

export type FileWithPreview = {
	file: File | FileMetadata;
	id: string;
	preview?: string;
};

export type FileUploadState = {
	files: FileWithPreview[];
	isDragging: boolean;
	errors: string[];
};

@Directive({
	selector: '[fileDragDrop]',
	standalone: true,
	host: {
		'[class]': '_computedClass()',
	},
})
export class FileDragDropDirective implements OnInit {
	sanitizer = inject(DomSanitizer);
	maxFiles = input<number>(Infinity);
	maxSize = input<number>(Infinity);
	maxTotalSize = input<number>(Infinity);
	accept = input<string>('*');
	multiple = input<boolean>(false);
	initialFiles = input<FileMetadata[]>([]);
	disabled = input<boolean>(false);
	dragClass = input<ClassValue>('');
	isDragging = signal<boolean>(false);

	onFilesChange = output<FileWithPreview[]>();
	onFileAdded = output<FileWithPreview[]>();
	files = model<FileUploadState>({
		files: [],
		isDragging: false,
		errors: [],
	});

	ngOnInit() {
		if (this.initialFiles().length > 0) {
			this.files.update((prev) => ({
				...prev,
				files: this.initialFiles().map((file) => ({
					file,
					id: file.id,
					preview: file.url,
				})),
			}));
		}
	}

	protected readonly _computedClass = computed(() => {
		if (this.disabled()) {
			return hlm('opacity-50 pointer-events-none');
		}

		return this.isDragging() ? hlm(this.dragClass()) : '';
	});

	@HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
		if (this.disabled()) {
			return;
		}

		evt.preventDefault();
		evt.stopPropagation();
		this.isDragging.set(true);
	}

	@HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
		if (this.disabled()) {
			return;
		}

		evt.preventDefault();
		evt.stopPropagation();
		this.isDragging.set(false);
	}

	@HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
		if (this.disabled()) {
			return;
		}

		evt.preventDefault();
		evt.stopPropagation();
		this.isDragging.set(false);

		if (evt.dataTransfer?.files && evt.dataTransfer.files.length > 0) {
			// In single file mode, only use the first file
			if (!this.multiple()) {
				const file = evt.dataTransfer.files[0];
				this.addFiles([file]);
			} else {
				this.addFiles(evt.dataTransfer.files);
			}
		}
	}

	addFiles(newFiles: FileList | File[]) {
		if (!newFiles || newFiles.length === 0) {
			return;
		}

		const newFilesArray = Array.from(newFiles);
		const errors: string[] = [];

		if (!this.multiple()) {
			this.clearFiles();
		}

		if (
			this.multiple() &&
			this.maxFiles() !== Infinity &&
			this.files().files.length + newFilesArray.length > this.maxFiles()
		) {
			errors.push(`You can only upload a maximum of ${this.maxFiles()} files.`);
			this.files.update((prev) => ({
				...prev,
				errors,
			}));
			return;
		}

		let currentTotalSize = this.files().files.reduce((acc, file) => acc + file.file.size, 0);
		const validFiles: FileWithPreview[] = [];
		let totalSizeErrorAdded = false;

		newFilesArray.forEach((file) => {
			if (this.multiple()) {
				const isDuplicate = this.files().files.some(
					(existingFile) => existingFile.file.name === file.name && existingFile.file.size === file.size,
				);

				if (isDuplicate) {
					return;
				}
			}

			if (file.size > this.maxSize()) {
				errors.push(
					this.multiple()
						? `Some files exceed the maximum size of ${formatBytes(this.maxSize())}.`
						: `File exceeds the maximum size of ${formatBytes(this.maxSize())}.`,
				);
				return;
			}
			if (currentTotalSize + file.size > this.maxTotalSize()) {
				if (!totalSizeErrorAdded) {
					totalSizeErrorAdded = true;
					errors.push('The total size of the files exceeds the maximum size.');
				}
				return;
			}

			const error = this.validateFile(file);
			if (error) {
				errors.push(error);
			} else {
				currentTotalSize += file.size;
				validFiles.push({
					file,
					id: generateUniqueId(file),
					preview: createPreview(file),
				});
			}
		});

		if (validFiles.length > 0) {
			// Call the onFilesAdded callback with the newly added valid files
			this.onFileAdded.emit(validFiles);

			this.files.update((prev) => {
				const newFiles = !this.multiple() ? validFiles : [...prev.files, ...validFiles];
				this.onFilesChange.emit(newFiles);
				return {
					...prev,
					files: newFiles,
					errors,
				};
			});
		} else if (errors.length > 0) {
			this.files.update((prev) => ({
				...prev,
				errors,
			}));
			this.onFilesChange.emit(this.files().files);
		}
	}

	validateFile = (file: File | FileMetadata): string | null => {
		if (file instanceof File) {
			if (file.size > this.maxSize()) {
				return `File "${file.name}" exceeds the maximum size of ${formatBytes(this.maxSize())}.`;
			}
		} else {
			if (file.size > this.maxSize()) {
				return `File "${file.name}" exceeds the maximum size of ${formatBytes(this.maxSize())}.`;
			}
		}

		if (this.accept() !== '*') {
			const acceptedTypes = this.accept()
				.split(',')
				.map((type) => type.trim());
			const fileType = file instanceof File ? file.type || '' : file.type;
			const fileExtension = `.${file instanceof File ? file.name.split('.').pop() : file.name.split('.').pop()}`;

			const isAccepted = acceptedTypes.some((type) => {
				if (type.startsWith('.')) {
					return fileExtension.toLowerCase() === type.toLowerCase();
				}
				if (type.endsWith('/*')) {
					const baseType = type.split('/')[0];
					return fileType.startsWith(`${baseType}/`);
				}
				return fileType === type;
			});

			if (!isAccepted) {
				return `File "${file instanceof File ? file.name : file.name}" is not an accepted file type.`;
			}
		}

		return null;
	};

	clearFiles() {
		this.files.update((prev) => {
			// Clean up object URLs
			prev.files.forEach((file) => {
				if (file.preview && file.file instanceof File && file.file.type.startsWith('image/')) {
					URL.revokeObjectURL(file.preview);
				}
			});

			const newState = {
				...prev,
				files: [],
				errors: [],
			};

			this.onFilesChange.emit(newState.files);
			return newState;
		});
	}

	removeFile(id: string) {
		this.files.update((prev) => {
			const fileToRemove = prev.files.find((file) => file.id === id);
			if (
				fileToRemove &&
				fileToRemove.preview &&
				fileToRemove.file instanceof File &&
				fileToRemove.file.type.startsWith('image/')
			) {
				URL.revokeObjectURL(fileToRemove.preview);
			}

			const newFiles = prev.files.filter((file) => file.id !== id);
			this.onFilesChange.emit(newFiles);

			return {
				...prev,
				files: newFiles,
				errors: [],
			};
		});
	}
}

export const formatBytes = (bytes: number, decimals = 2): string => {
	if (bytes === 0) return '0 Bytes';

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
};

export const generateUniqueId = (file: File | FileMetadata): string => {
	if (file instanceof File) {
		return `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
	}
	return file.id;
};

export const createPreview = (file: File | FileMetadata): string | undefined => {
	if (file instanceof File) {
		return URL.createObjectURL(file);
	}
	return file.url;
};
