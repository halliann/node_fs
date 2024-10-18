console.log("EXERCISE:\n==========\n");

const fs = require('fs');

let hello_world = 'Hello, World!';

fs.writeFile('HelloWorld.txt', hello_world, (err) => {
    if(err) {
        return console.error(err);
    }
    console.log('Successfully wrote file.')
});