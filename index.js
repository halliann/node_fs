console.log("EXERCISE:\n==========\n");

const fs = require('fs');

const filesToCreate = [
    {name: 'createFile.js', content: ''},
    {name: 'readFile.js', content: ''},
    {name: 'updateFile.js', content: ''},
    {name: 'deleteFile.js', content: ''}
];

filesToCreate.forEach(file => {
    fs.writeFile(file.name, file.content, (err) => {
        if(err) {
            return console.error(err);
        }
        console.log('Successfully wrote file.');
    })
});