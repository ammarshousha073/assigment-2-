function Showpath(){
    console.log(
   "File" , __filename,
    '\n',
    "Dir : " , __dirname
    );
}
Showpath();
console.log("/*q1**//*q1**//*q1**/");
/*q1**//*q1**//*q1**/
const path = require("path");
function GetFilename(filepath){
    return path.basename(filepath);
}
console.log(GetFilename("/user/files/assigment 2 "));
console.log("/*q2**//*q2**//*q2**/");
/*q2**//*q2**//*q2**/
const path1=require("path");
function Buildpath(obj){
    return path.join(obj.dir , obj.name , obj.ext)
};
const file= {
    dir: "/folder",
    name : "/app",
    ext : ".js"
}
console.log(Buildpath(file));
console.log("/*q3**//*q3**//*q3**/");
/*q3**//*q3**//*q3**/

const path2 = require("path");

function getExtantion(filepath){
    return path.extname(filepath);
}
console.log(getExtantion("/assigment2/main.js"));
console.log("/*q4**//*q4**//*q4**/");
/*q4**//*q4**//*q4**/
const path3 = require ("path");
function ParseFile(filepath){
    const file=path3.parse(filepath);
    return{
        Name : file.name,
        ext : file.ext 
    };
}
console.log(ParseFile("/assigment2/main.js"));
console.log("/*5q5**//*q5**//*q5**/");
/*5q5**//*q5**//*q5**/

