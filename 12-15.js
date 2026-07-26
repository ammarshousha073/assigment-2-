const EventEmmitter = require("events");
const event = new EventEmmitter();
event.on("start" , ()=>{
    console.log("WELCOME EVENT TRIGGED ");
    
});
event.emit("start")
/////q12 
console.log("q12///////////");

const Eventemmitter = require("events");
const event1 = new Eventemmitter();
event1.on("login" , (username)=>{
    console.log(`user loged in :${username}`);
    
})
event1.emit("login" , "ammarshousha")
//////////////q13
console.log("q13/////");

const fs = require ("fs");
function Readfile(filepath){
    try {
        const content = fs.readFileSync(filepath , "utf-8")
    console.log("The file content =>", content);
    
    } catch (error) {
        console.log(error.message);
        
    }
    // const content = fs.readFileSync(filepath , "utf-8")
    // console.log("The file content =>", content);
    
}
Readfile("filee.txt");
console.log("q14//////////");
////////////q14

const fs1 = require ("fs");
function Writefile(path , content) {
    fs1.writeFile(path,content, (error)=>{
        if(error)
        console.log(error.message);
        return;
    })
    console.log("file save successfullly");
    
    
}
Writefile("assyncc.txt" , "async saveed ya m3lm")
////q15
console.log("q15//////");


