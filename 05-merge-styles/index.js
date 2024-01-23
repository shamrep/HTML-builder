const fs = require('fs');
const path = require('node:path');
const distDir = path.join(__dirname, 'project-dist');
const stylesDir = path.join(__dirname, 'styles');

fs.readdir(stylesDir, (error, files) => {
  if (error) {
    console.log(error);
  }

  let compiledData;
  files.forEach((file) => {
    if (path.extname(file) === '.css') {
      const data = fs.readFileSync(path.join(stylesDir, file));
      compiledData += data + '\n';
    }
  });

  fs.writeFile(path.join(distDir, 'bundle.css'), compiledData, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Styles were bundled into bundle.css');
    }
  });
});
