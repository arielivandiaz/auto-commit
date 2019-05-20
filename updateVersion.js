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

/*
fs.writeFile("version.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete');
});

/*

const fs = require('fs');


const params = require('./version.json');

params.version;
console.log(params.rev);
params.rev+=1;
console.log(params.rev);
var dev = params.dev;

if(params.dev){
    
    console.log("IN DE");
}else console.log("ON PROD");

console.log("json");

{
    "dev": false,
    "version": 1,
    "rev":0

}
*/
