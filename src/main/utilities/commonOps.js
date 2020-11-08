
const {parser, fs, xml2js} = require('base');

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync("config/dataConfig.xml", "utf8");

parser.parseString(xml_string, function(error, result) {
    if(error === null) {
        console.log(result);
    }
    else {
        console.log(error);
    }
});