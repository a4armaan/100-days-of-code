const fs = require('fs');
var fileName = 'read-write-file.txt';
fs.writeFileSync(fileName, 'Hi, This file is written by Nodejs!!!!!!!!. My Name is Computer.');

fs.appendFileSync(fileName, 'I am a full stack developer. And trying to learn NodeJs.Its wonderful.');