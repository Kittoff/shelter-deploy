let fs = require('fs');
const FILE_NAME = './assets/pets.json';

let petRepo = {
    get: function (resole, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resole(JSON.parse(data));
            }
        })
    }
}

module.exports = petRepo