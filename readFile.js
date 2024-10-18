console.log("EXERCISE:\n==========\n");

const fs = require('fs');

fs.readFile('HelloWorld.txt', (err) => {
    if(err) {
        return console.error(err);
    }
    console.log('Successfully read file.');
});