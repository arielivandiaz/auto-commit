var fs = require('fs');


fs.readFile('version.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.log(err);
    } else {
        obj = JSON.parse(data); 
        obj.rev += 1;
        json = JSON.stringify(obj); 
        fs.writeFile('version.json', json, 'utf8', () => {
            console.log("Updated version: " +obj.version+"."+obj.rev);
        }); 
    }
});
