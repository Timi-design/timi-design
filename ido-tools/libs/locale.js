const readDir = require('fs').readdirSync;
const files = readDir('./utils/locale/lang');
const entry = {};

files.forEach(file => {
  const name = file.split('.')[0];
  entry[name] = './utils/locale/lang/' + file;
});

module.exports = entry;
