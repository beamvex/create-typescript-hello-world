# Publishing Your Template to npm

To make your `create-typescript-hello-world` template available globally via `npx`, follow these steps:

## Prerequisites

1. **Create an npm account** at [npmjs.com](https://www.npmjs.com/signup)
2. **Install npm CLI** (should already be installed with Node.js)

## Steps to Publish

### 1. Login to npm
```bash
npm login
```
Enter your npm username, password, and email when prompted.

### 2. Update package.json
Before publishing, update these fields in `package.json`:
- `author`: Replace with your name and email
- `repository.url`: Replace with your actual GitHub repository URL
- `homepage`: Replace with your actual GitHub repository URL
- `bugs.url`: Replace with your actual GitHub issues URL

### 3. Check package name availability
```bash
npm view create-typescript-hello-world
```
If this returns an error, the name is available. If it shows package info, you'll need to choose a different name.

### 4. Test the package locally (optional but recommended)
```bash
npm pack
```
This creates a `.tgz` file you can test locally.

### 5. Publish to npm
```bash
npm publish
```

## After Publishing

Once published, anyone can use your template:

```bash
npx create-typescript-hello-world my-project
cd my-project
npm install
npm run dev
```

## Important Notes

- **Package name must be unique** on npm registry
- **Version number** will need to be incremented for future updates
- **Files included** in publish are specified in the `files` array in package.json
- The `bin` field makes the command available globally via npx

## Alternative: Scoped Package

If the name is taken, you can publish as a scoped package:

1. Change the name in package.json to `@yourusername/create-typescript-hello-world`
2. Publish with: `npm publish --access public`
3. Users would then run: `npx @yourusername/create-typescript-hello-world my-project`

## Updating Your Package

For future updates:
1. Make your changes
2. Update the version number in package.json (`npm version patch|minor|major`)
3. Run `npm publish` again
