const fs = require ("fs")
function Check(folderpath){
    return fs.existsSync(folderpath)
}
console.log(Check("filee.txt")); // او اي اسم فايل تاني 
/// q16 
console.log("q16//////");

const os = require("os");
function getOsinfo() {
    return {
        platform : os.platform(),
        
        Arch : os.arch()
    }
}
console.log(getOsinfo());
////q17
console.log("q17//////////////");

