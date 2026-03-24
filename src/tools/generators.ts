import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);

interface ConvertOptions {
	filterFile: (fileName: string) => boolean;
	resolveRegistryName: (filePath: string, sourceDir: string) => string;
	label: string;
}

function convertSourceFilesToJson(sourceDir: string, registryDir: string, options: ConvertOptions): number {
	// Ensure registry output directory exists
	if (!fs.existsSync(registryDir)) {
		fs.mkdirSync(registryDir, { recursive: true });
	}

	let count = 0;

	function processDirectory(dir: string): void {
		const items = fs.readdirSync(dir);

		items.forEach((item) => {
			const fullPath = path.join(dir, item);
			const stat = fs.statSync(fullPath);

			if (stat.isDirectory()) {
				processDirectory(fullPath);
				return;
			}

			if (!options.filterFile(item)) {
				return;
			}

			processFile(fullPath);
		});
	}

	function processFile(filePath: string): void {
		try {
			const sourceCode = fs.readFileSync(filePath, 'utf8');
			const content = sourceCode.trim();
			const registryName = options.resolveRegistryName(filePath, sourceDir);
			const outputPath = path.join(registryDir, `${registryName}.json`);
			const outputDir = path.dirname(outputPath);

			if (!fs.existsSync(outputDir)) {
				fs.mkdirSync(outputDir, { recursive: true });
			}

			fs.writeFileSync(outputPath, JSON.stringify({ content }, null, 2));
			count++;
			console.log(`✓ Processed (${options.label}): ${filePath} -> ${outputPath}`);
		} catch (error) {
			console.error(`✗ Error processing ${filePath}:`, error);
		}
	}

	processDirectory(sourceDir);
	return count;
}

// Usage function
export function generateComponentJsons(): void {
	const componentsDir = path.join(process.cwd(), 'src/app/components');
	const simDir = path.join(process.cwd(), 'src/libs/sim');
	const publicDir = path.join(process.cwd(), 'public/registry');

	console.log('Starting component to JSON conversion...');
	console.log(`Source: ${componentsDir}`);
	console.log(`Source: ${simDir}`);
	console.log(`Public Output: ${publicDir}`);

	if (!fs.existsSync(componentsDir)) {
		console.error(`Components directory not found: ${componentsDir}`);
		return;
	}

	const componentCount = convertSourceFilesToJson(componentsDir, publicDir, {
		filterFile: (fileName) => fileName.endsWith('.component.ts'),
		resolveRegistryName: (filePath) => path.basename(filePath, '.component.ts'),
		label: 'component',
	});

	let simCount = 0;
	if (!fs.existsSync(simDir)) {
		console.warn(`Sim library directory not found, skipping: ${simDir}`);
	} else {
		simCount = convertSourceFilesToJson(simDir, publicDir, {
			filterFile: (fileName) => fileName.endsWith('.ts'),
			resolveRegistryName: (filePath, sourceDir) =>
				path.join('sim', path.relative(sourceDir, filePath).replace(/\.ts$/, '')),
			label: 'sim',
		});
	}

	console.log(`✓ Generated: ${componentCount} component JSON files in public/registry`);
	console.log(`✓ Generated: ${simCount} sim JSON files in public/registry/sim`);
	console.log('Conversion completed!');
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
	generateComponentJsons();
}
