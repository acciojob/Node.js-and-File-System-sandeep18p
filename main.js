const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        rl.close();
        return;
      }

      const modifiedContent = data.replace(new RegExp('\\b' + word + '\\b', 'g'), '');

      fs.writeFile(filename, modifiedContent, 'utf8', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          rl.close();
          return;
        }
        console.log(`Word "${word}" removed from file.`);
        rl.close();
      });
    });
  });
});
