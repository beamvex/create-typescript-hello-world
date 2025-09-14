#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

async function createProject() {
  const projectName = process.argv[2] || 'my-typescript-project';
  const targetDir = path.resolve(process.cwd(), projectName);

  console.log(`Creating TypeScript project: ${projectName}`);

  try {
    // Create target directory
    await fs.ensureDir(targetDir);

    // Copy template files
    const templateDir = path.join(__dirname, 'template');
    await fs.copy(templateDir, targetDir);

    // Update package.json with project name
    const packageJsonPath = path.join(targetDir, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = projectName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    console.log(`✅ Project ${projectName} created successfully!`);
    console.log('\nNext steps:');
    console.log(`  cd ${projectName}`);
    console.log('  npm install');
    console.log('  npm run dev');
    console.log('\nHappy coding! 🚀');

  } catch (error) {
    console.error('Error creating project:', error.message);
    process.exit(1);
  }
}

createProject();
