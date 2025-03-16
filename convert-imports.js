const fs = require('fs');
const path = require('path');
const glob = require('glob');

const srcDir = path.resolve(__dirname, 'src');

glob('src/**/*.ts', (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    return;
  }

  files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Regex to match relative imports
    const relativeImportRegex = /from\s+['"](\.\.?\/.+?)['"]/g;

    content = content.replace(relativeImportRegex, (match, relativePath) => {
      const absolutePath = path.resolve(path.dirname(file), relativePathToSrc(relativeImportPath(file, importPath)));
      let relativeFromSrc = path.relative('src', absolutePath).replace(/\\/g, '/');
      
      // Remove `.ts` or `/index.ts` if accidentally included
      relativeImportCleanup = relativePath => relativePath
        .replace(/(\.ts|\.js|\/index\.ts|\/index\.js)$/,'');

      relativePath = relativeImportCleanup(relativePath);

      return `from '@app/${relativePath}'`;
    });

    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Converted imports in ${file}`);
  });
});
