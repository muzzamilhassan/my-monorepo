# create-user

A tiny CLI to scaffold a basic user app with `login.ts`, `logout.ts`, and `register.ts` files. It creates a new directory, writes a minimal `package.json`, and prints next steps.

## Install

- Using pnpm (recommended):

```bash
pnpm dlx create-user my-user-app
```

- Using npx:

```bash
npx create-user my-user-app
```

Replace `my-user-app` with your desired project name. If no name is provided, it defaults to `my-user-app`.

## Usage

- Create a new app in the current directory:

```bash
pnpm dlx create-user my-app
# or
npx create-user my-app
```

This will:
- Create a folder named `my-app`
- Generate `package.json`
- Create the files: `login.ts`, `logout.ts`, `register.ts`
- Print next steps (cd, install, start)

### Generated structure

```
my-app/
  package.json
  login.ts
  logout.ts
  register.ts
```

### Next steps (after generation)

```bash
cd my-app
pnpm install
pnpm start
```

`pnpm start` runs `node login.js` per the generated `package.json`. Adjust as needed for your workflow.

## Local development (inside this monorepo)

Run the CLI from source during development:

- Dev (ts-node):

```bash
pnpm --filter create-user dev -- my-temp-app
```

- Build and run the compiled CLI:

```bash
pnpm --filter create-user build
node packages/create-user/dist/index.js my-temp-app
```

## Notes

- The CLI accepts a single positional argument for the project name. If omitted, it uses `my-user-app`.
- The `bin` entry points to `dist/index.js`, so when publishing, make sure to run a build first.

## Troubleshooting

- If you see "command not found" for `create-user`, use `pnpm dlx create-user <name>` or ensure the package is installed globally.
- On Windows PowerShell, prepend `node` when running the compiled file directly, e.g. `node packages/create-user/dist/index.js my-app`.
