# Code Generation Scripts

This directory contains a script to help automate the generation and synchronization of component code strings in the SimUI project.

## Script Overview

### `generate-code-strings.js`
A smart script that automatically handles both creating and updating component code strings.

```bash
# Process all component types
npm run codes

# Process only accordion components  
npm run codes:accordion
```

**What it does:**
- **Creates new code exports** for components that don't have them yet
- **Updates existing code exports** for components that already have them
- Extracts component code from imports to end of component class (includes items array)
- Works with all component types (accordion, button, card, etc.)
- Maintains proper escaping for template literals
- Safe to run multiple times

## Usage

### Most Common Use Case
After making changes to any component, run:

```bash
npm run codes:accordion
```

This will automatically sync your accordion component changes with the corresponding code string exports.

For other component types:
```bash
npm run codes
```

### Example Workflow

1. Edit your component file (e.g., `accordion-01.component.ts`)
2. Modify the component class, template, or imports
3. Run `npm run codes:accordion` for accordion components, or `npm run codes` for all components
4. The script automatically creates or updates the code string (e.g., `accordion01Code`) to match your changes
5. Commit your changes

### File Structure Expected

The scripts expect this structure:
```
src/app/components/accordion/
├── accordion-01.component.ts
├── accordion-02.component.ts
└── ...
```

Each file should contain:
- A component class named `AccordionXXComponent`
- An export named `accordionXXCode` (where XX is the component number)

## Benefits

- **No more manual copying**: Component changes are automatically synced
- **Consistent formatting**: Proper escaping and formatting is handled automatically  
- **Time saving**: No need to manually copy/paste and escape code
- **Error prevention**: Reduces chance of forgetting to update code strings

## Troubleshooting

If a component fails to update:
1. Check that the component class name follows the pattern `AccordionXXComponent`
2. Ensure the code export follows the pattern `accordionXXCode`
3. Make sure there are no syntax errors in your component

## Contributing

To add support for other component types (buttons, cards, etc.), modify the `COMPONENT_FOLDERS` array in `generate-code-strings.js` and adjust the naming patterns as needed.
