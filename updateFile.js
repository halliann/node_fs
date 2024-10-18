console.log("EXERCISE:\n==========\n");

const fs = require('fs');

let welcome_msg = 'Welcome to the jungle!';

fs.appendFile('HelloWorld.txt', welcome_msg, (err) => {
    if(err) {
        return console.error(err);
    }
    console.log('Successfully appended to file.');
});