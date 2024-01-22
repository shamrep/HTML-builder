const fs = require('fs');
const path = require('node:path');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, files) => {
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    fs.stat(filePath, (err, stats) => {
      if (stats.isFile()) {
        const fileSize = (stats.size / 1024).toFixed(3) + 'kb';
        const fileName = path.parse(file).name;
        const fileExtension = path.parse(file).ext.slice(1);
        console.log(`${fileName} - ${fileExtension} - ${fileSize}`);
      }
    });
  });
});
