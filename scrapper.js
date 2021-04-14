const fs = require('fs');

let rawdata = fs.readFileSync('test.json');
let student = JSON.parse(rawdata);
const array = student["selection1"]
const data  = array.map(({name}) => {
    const splitFirst = name.split("”")
    const title = splitFirst[1].replace(/[^\w\s]/gi, '').trim()
    const desc = splitFirst[0].replace(/[^\w\s]/gi, '').trim()
    return {
        title,
        desc
    }
});
fs.writeFileSync("parsed.json" , JSON.stringify(data))
console.log(data);