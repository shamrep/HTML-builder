const fs = require('fs');
const path = require('node:path');
const stylesDir = path.join(__dirname, 'styles');
const outputDir = path.join(__dirname, 'project-dist');
const outputFile = 'bundle.css';

fs.readdir(stylesDir, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  let cssFiles = files.filter((file) => path.extname(file) === '.css');
  let cssData = '';

  cssFiles.forEach((file, index) => {
    fs.readFile(path.join(stylesDir, file), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      cssData += data;

      if (index === cssFiles.length - 1) {
        fs.writeFile(
          path.join(outputDir, outputFile),
          cssData,
          'utf8',
          (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('Styles are compiled.');
          },
        );
      }
    });
  });
});
