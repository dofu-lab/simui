import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);

function convertComponentsToJson(componentsDir: string, outputDir: string, publicDir: string): void {
	// Ensure both output directories exist
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
	if (!fs.existsSync(publicDir)) {
		fs.mkdirSync(publicDir, { recursive: true });
	}

	const componentsData: { [key: string]: string } = {};

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

			// Add to components data object for the single file
			componentsData[fileName] = componentCode;

			// Create individual JSON file in public folder
			const jsonFileName = `${fileName}.json`;
			const individualOutputPath = path.join(publicDir, jsonFileName);
			const individualJsonOutput = {
				content: componentCode,
			};
			fs.writeFileSync(individualOutputPath, JSON.stringify(individualJsonOutput, null, 2));

			console.log(`✓ Processed: ${fileName}.component.ts -> public/${jsonFileName}`);
		} catch (error) {
			console.error(`✗ Error processing ${filePath}:`, error);
		}
	}

	// Process all components
	processDirectory(componentsDir);

	// Write single components.json file in assets
	const componentsJsonPath = path.join(outputDir, 'components.json');
	fs.writeFileSync(componentsJsonPath, JSON.stringify(componentsData, null, 2));
	console.log(
		`✓ Generated: assets/generated-code/components.json with ${Object.keys(componentsData).length} components`,
	);
	console.log(`✓ Generated: ${Object.keys(componentsData).length} individual JSON files in public folder`);
}

// Usage function
export function generateComponentJsons(): void {
	const componentsDir = path.join(process.cwd(), 'src/app/components');
	const outputDir = path.join(process.cwd(), 'src/assets/generated-code');
	const publicDir = path.join(process.cwd(), 'public/registry');

	console.log('Starting component to JSON conversion...');
	console.log(`Source: ${componentsDir}`);
	console.log(`Assets Output: ${outputDir}`);
	console.log(`Public Output: ${publicDir}`);

	if (!fs.existsSync(componentsDir)) {
		console.error(`Components directory not found: ${componentsDir}`);
		return;
	}

	convertComponentsToJson(componentsDir, outputDir, publicDir);
	console.log('Conversion completed!');
}

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
	generateComponentJsons();
}
