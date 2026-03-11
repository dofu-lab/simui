import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);

function convertComponentsToJson(componentsDir: string, publicDir: string): void {
	// Ensure public output directory exists
	if (!fs.existsSync(publicDir)) {
		fs.mkdirSync(publicDir, { recursive: true });
	}

	let count = 0;

	function processDirectory(dir: string): void {
		const items = fs.readdirSync(dir);

		items.forEach((item) => {
			const fullPath = path.join(dir, item);
			const stat = fs.statSync(fullPath);

			if (stat.isDirectory()) {
				processDirectory(fullPath);
			} else if (item.endsWith('.component.ts')) {
				processComponentFile(fullPath);
			}
		});
	}

	function processComponentFile(filePath: string): void {
		try {
			const sourceCode = fs.readFileSync(filePath, 'utf8');

			// Use the entire file content
			const componentCode = sourceCode.trim();

			const fileName = path.basename(filePath, '.component.ts');

			// Create individual JSON file in public folder
			const jsonFileName = `${fileName}.json`;
			const individualOutputPath = path.join(publicDir, jsonFileName);
			fs.writeFileSync(individualOutputPath, JSON.stringify({ content: componentCode }, null, 2));
			count++;
			console.log(`✓ Processed: ${fileName}.component.ts -> public/${jsonFileName}`);
		} catch (error) {
			console.error(`✗ Error processing ${filePath}:`, error);
		}
	}

	// Process all components
	processDirectory(componentsDir);
	console.log(`✓ Generated: ${count} individual JSON files in public/registry`);
}

// Usage function
export function generateComponentJsons(): void {
	const componentsDir = path.join(process.cwd(), 'src/app/components');
	const publicDir = path.join(process.cwd(), 'public/registry');

	console.log('Starting component to JSON conversion...');
	console.log(`Source: ${componentsDir}`);
	console.log(`Public Output: ${publicDir}`);

	if (!fs.existsSync(componentsDir)) {
		console.error(`Components directory not found: ${componentsDir}`);
		return;
	}

	convertComponentsToJson(componentsDir, publicDir);
	console.log('Conversion completed!');
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
	generateComponentJsons();
}
