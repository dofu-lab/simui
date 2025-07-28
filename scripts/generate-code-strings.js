#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

/**
 * Generates code string exports for Angular components
 * Usage: node scripts/generate-code-strings.js
 * 
 * This script:
 * 1. Scans component files for patterns like ComponentName and componentNameCode
 * 2. Extracts the component source code (from imports to the end of class)
 * 3. Generates/updates the code string export
 * 4. Preserves existing items array if present
 */

// Configuration
const COMPONENTS_DIR = path.join(process.cwd(), 'src/app/components');
const COMPONENT_FOLDERS = ['accordion', 'alert', 'avatar', 'badge', 'banner', 'breadcrumb', 'button', 'card', 'checkbox', 'dialog', 'notification', 'popover', 'radio', 'tabs'];

/**
 * Extract component source code from file content
 */
function extractComponentCode(content, componentName) {
  const lines = content.split('\n');
  let startIndex = -1;
  let endIndex = -1;
  let braceCount = 0;
  let inComponent = false;
  
  // Find the start of imports
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('import ') && startIndex === -1) {
      startIndex = i;
      break;
    }
  }
  
  if (startIndex === -1) return null;
  
  // Find the end of the component class
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check if we've reached the component class
    if (line.includes(`export class ${componentName}`)) {
      inComponent = true;
    }
    
    if (inComponent) {
      // Count braces to find the end of the class
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      // If we've closed all braces and we're in the component, we've found the end
      if (braceCount === 0 && line.includes('}')) {
        endIndex = i;
        break;
      }
    }
  }
  
  if (endIndex === -1) return null;
  
  // Extract the component code
  const componentCode = lines.slice(startIndex, endIndex + 1).join('\n');
  return componentCode;
}

/**
 * Generate the code string for a component
 */
function generateCodeString(componentCode, codeVariableName) {
  // Escape backticks and backslashes in the component code
  const escapedCode = componentCode
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/`/g, '\\`');   // Escape backticks
  
  return `
export const ${codeVariableName} = \`${escapedCode}\`;`;
}

/**
 * Extract items array from existing component if present
 */
function extractItemsArray(content, componentName) {
  const regex = new RegExp(`export class ${componentName}[\\s\\S]*?items = (\\[[\\s\\S]*?\\]);`, 'm');
  const match = content.match(regex);
  return match ? match[1] : null;
}

/**
 * Process a single component file - creates or updates code export
 */
function processComponentFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.ts');
  
  // Extract component name (e.g., "accordion-01" -> "Accordion01Component")
  const componentMatch = fileName.match(/([a-z-]+)-(\d+)/);
  if (!componentMatch) {
    console.log(`Skipping ${fileName} - doesn't match expected pattern`);
    return;
  }
  
  const [, prefix, number] = componentMatch;
  const capitalizedPrefix = prefix.charAt(0).toUpperCase() + prefix.slice(1);
  const componentName = `${capitalizedPrefix}${number.padStart(2, '0')}Component`;
  const codeVariableName = `${prefix}${number.padStart(2, '0')}Code`;
  
  console.log(`Processing ${fileName} -> ${componentName} / ${codeVariableName}`);
  
  // Extract component source code
  const componentCode = extractComponentCode(content, componentName);
  if (!componentCode) {
    console.log(`  ✗ Could not extract component code for ${componentName}`);
    return;
  }
  
  // Escape the component code for template literal
  const escapedCode = componentCode
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`');
  
  // Check if code export already exists
  const codeExportRegex = new RegExp(`export const ${codeVariableName} = \`([\\s\\S]*?)\`;`, 'm');
  const hasCodeExport = codeExportRegex.test(content);
  
  if (hasCodeExport) {
    // Update existing code export
    const updatedContent = content.replace(
      codeExportRegex,
      `export const ${codeVariableName} = \`${escapedCode}\`;`
    );
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`  ✓ Updated existing code export for ${fileName}`);
  } else {
    // Create new code export
    const codeString = generateCodeString(componentCode, codeVariableName);
    const updatedContent = content + codeString;
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`  ✓ Created new code export for ${fileName}`);
  }
}

/**
 * Process all component files in a folder
 */
function processComponentFolder(folderName) {
  const folderPath = path.join(COMPONENTS_DIR, folderName);
  
  if (!fs.existsSync(folderPath)) {
    console.log(`Folder ${folderPath} does not exist, skipping...`);
    return;
  }
  
  console.log(`\nProcessing ${folderName} components...`);
  
  const files = fs.readdirSync(folderPath)
    .filter(file => file.endsWith('.component.ts'))
    .filter(file => !file.includes('index'))
    .sort();
  
  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    processComponentFile(filePath);
  });
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  const folderName = args[0];
  
  console.log('🚀 Component Code String Generator');
  console.log('=====================================');
  console.log('Mode: Create or update code exports\n');
  
  if (folderName && COMPONENT_FOLDERS.includes(folderName)) {
    // Process specific folder
    processComponentFolder(folderName);
  } else {
    // Process all folders
    COMPONENT_FOLDERS.forEach(processComponentFolder);
  }
  
  console.log('\n✅ Done!');
}

// Execute if run directly
if (require.main === module) {
  main();
}

module.exports = {
  processComponentFile,
  processComponentFolder,
  extractComponentCode,
  generateCodeString
};
