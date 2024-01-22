const fs = require('fs');
const path = require('node:path');

function copyDir(source, dest) {
  fs.mkdir(dest, { recursive: true }, () => {
    fs.readdir(source, (error, files) => {
      if (error) {
        console.log(error);
      }
      files.forEach((file) => {
        const sourceFile = path.join(source, file);
        const destFile = path.join(dest, file);
        fs.stat(sourceFile, (error, stats) => {
          if (error) {
            console.log(error);
          }
          if (stats.isFile()) {
            fs.copyFile(sourceFile, destFile, () => {});
          }
        });
      });
    });
  });
}

copyDir(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'));
