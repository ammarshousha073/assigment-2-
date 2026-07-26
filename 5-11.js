const path = require ("path");
function IsAbselute(filepath){
    return path.isAbsolute (filepath)
};
console.log(IsAbselute("/home/user/file.txt"));
console.log( " ////////////// q6 ");
/////// q6 
const path1 = require ("path");
function Joinpath(...segments){
    return path.join(...segments);
}
console.log(Joinpath("src", "components", "App.js"));
console.log("///////////q7");
/////////q7 
const path2 = require("path");
function Resolvepath(filepath){
    return path2.resolve(filepath)
};
console.log(Resolvepath("5-10.js"));
console.log("///////////q8");
/////////q8
 const path3 = require ("path");
 function Jointwopath(pathx, pathy){
    return path3.join(pathx,pathy)
 };
 console.log(Joinpath("/1-5.js" , "5-10.js" , ));
 console.log(" ///////////q9 ");
 /////////////q9
const fs = require ("fs");
function Deletefile(filepath){
    fs.unlink(filepath , (error)=>{
        if (error){
            console.log("error " , error.message);
            return;
            
        }
console.log(`${path.basename(filepath)} is deleted`);
        
    })
}
Deletefile("file.txt")
console.log("/////////////q10");
///////////////////q10
const fs1 = require("fs");
function CreateFolder(foldername){
    fs1.mkdirSync(foldername)
    console.log("sucssesssss");

}
// CreateFolder("ammar") 
 
/////q11
console.log("q11//////////");


  