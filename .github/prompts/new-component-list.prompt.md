---
description: "Scaffold a new SimUI component list. Provide: component name (e.g. 'tooltip') and how many stub components to create (e.g. 3)."
agent: agent
tools: [execute, read, edit, search, todo]
---

You are scaffolding a new SimUI component list.

**Inputs from user:**
- `{name}` — kebab-case component name (e.g. `tooltip`, `file-input`, `date-picker`)
- `{count}` — number of initial stub components to generate

## Naming Reference

| Form | Rule | Example (`file-input`) |
|------|------|------------------------|
| kebab | as-is | `file-input` |
| Pascal | capitalize each word, drop hyphens | `FileInput` |
| camelConst | Pascal + `Components`, first char lowercase | `fileInputComponents` |
| Title | capitalize words, keep spaces | `File Input` |

## Step 0 — Read files upfront (do this first, in parallel)

Read all four files that will be modified so you know exact insertion points before touching anything:
- `src/app/constants/index.ts`
- `src/app/pages/index.ts`
- `src/app/app.routes.ts`
- `src/app/constants/home.constant.ts`

## Step 1 — Generate stubs + constant via terminal script

Use a single Python script (via terminal) to generate all files at once. This is faster and avoids creating files one by one.

```python
import os

NAME = "{name}"          # e.g. "tooltip"
PASCAL = "{Pascal}"      # e.g. "Tooltip"
CAMEL = "{camel}"        # e.g. "tooltip"
TITLE = "{Title}"        # e.g. "Tooltip"
COUNT = {count}

# ── 1a. Stub components ──────────────────────────────────────────────────
comp_dir = f"src/app/components/{NAME}"
os.makedirs(comp_dir, exist_ok=True)

for i in range(1, COUNT + 1):
    n = f"{i:02d}"
    with open(f"{comp_dir}/{NAME}-{n}.component.ts", "w") as f:
        f.write(f"""import {{ Component }} from '@angular/core';

@Component({{
\tselector: 'sim-{NAME}-{n}',
\timports: [],
\ttemplate: `
\t\t<div class="flex items-center justify-center p-4">
\t\t\t<p class="text-muted-foreground text-sm">{TITLE} {n}</p>
\t\t</div>
\t`,
}})
export class {PASCAL}{n}Component {{}}
""")

# ── 1b. Barrel index.ts ──────────────────────────────────────────────────
with open(f"{comp_dir}/index.ts", "w") as f:
    f.write("\n".join(f"export * from './{NAME}-{i:02d}.component';" for i in range(1, COUNT + 1)) + "\n")

# ── 1c. Constant file ────────────────────────────────────────────────────
imports = "\n".join(f"\t{PASCAL}{i:02d}Component," for i in range(1, COUNT + 1))
entries = "\n".join(f"""\t{{
\t\tid: '{NAME}-{i:02d}',
\t\tcomponent: {PASCAL}{i:02d}Component,
\t\tcolNumber: 2,
\t\titemStyle: 1,
\t}},""" for i in range(1, COUNT + 1))

with open(f"src/app/constants/{NAME}.constant.ts", "w") as f:
    f.write(f"""import {{
{imports}
}} from '../components/{NAME}';
import {{ ComponentCardItem }} from '../core';

export const {CAMEL}Components: ComponentCardItem[] = [
{entries}
];
""")

# ── 1d. Page component ───────────────────────────────────────────────────
with open(f"src/app/pages/{NAME}.component.ts", "w") as f:
    f.write(f"""import {{ Component }} from '@angular/core';
import {{ {CAMEL}Components }} from '../constants';
import {{ ComponentHeaderComponent, PageGridComponent }} from '../core';

@Component({{
\tselector: 'app-{NAME}',
\timports: [PageGridComponent, ComponentHeaderComponent],
\ttemplate: `
\t\t<component-header
\t\t\tname="{TITLE}"
\t\t\tdescription="{TITLE} component." />
\t\t<page-grid [components]="components" />
\t`,
}})
export class {PASCAL}Component {{
\tcomponents = {CAMEL}Components;
}}
""")

print(f"✓ {COUNT} stubs, index.ts, {NAME}.constant.ts, {NAME} page — done")
```

Run this script from the workspace root with `python3 -`.

## Step 2 — Update the 4 existing files (all at once with multi-replace)

Use **multi_replace_string_in_file** to apply all 4 edits in a single call. Find the correct alphabetical insertion neighbor from the files you read in Step 0.

### `src/app/constants/index.ts`
Insert `export * from './{name}.constant';` alphabetically.

### `src/app/pages/index.ts`
Insert `export * from './{name}.component';` alphabetically.

### `src/app/app.routes.ts`
Inside the `components` children array, insert alphabetically:
```ts
{
	path: '{name}',
	loadComponent: () => import('./pages').then((m) => m.{Pascal}Component),
	data: {
		title: '{Title}',
		description: '{Title} component.',
		keywords: '{name}, angular component',
	},
},
```

### `src/app/constants/home.constant.ts`
1. Add import: `import { {camel}Components } from './{name}.constant';` (with other imports, alphabetical)
2. Add to `previewComponents` array (alphabetical by `name` field):
```ts
{
	name: '{Title}',
	compNumber: {camel}Components.length,
	image: '{name}.svg',
	path: 'components/{name}',
},
```

## Step 3 — Verify

Run this one-liner to confirm everything landed correctly:

```bash
echo "stubs:" && ls src/app/components/{name}/ | wc -l && \
grep "{name}" src/app/constants/index.ts src/app/pages/index.ts src/app/app.routes.ts src/app/constants/home.constant.ts
```

Expected: `stubs: {count+1}` (components + index.ts), and 1 match in each of the 4 files.

## Final Checklist

- [ ] `src/app/components/{name}/` — {count} stub files + `index.ts`
- [ ] `src/app/constants/{name}.constant.ts` — {count} entries
- [ ] `src/app/pages/{name}.component.ts` — page component
- [ ] `src/app/constants/index.ts` — export added
- [ ] `src/app/pages/index.ts` — export added
- [ ] `src/app/app.routes.ts` — route added
- [ ] `src/app/constants/home.constant.ts` — import + `previewComponents` entry added

Report a summary table of all files created/modified.
