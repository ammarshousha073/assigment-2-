const fs = require("fs");
function ReadChunck(filepath){
    const stream = fs.createReadStream(filepath , "utf-8");
    stream.on("data", (chunck) =>{
        console.log(chunck);
        
    })
}
ReadChunck("big.txt");
///////q19 
console.log("q19////////");

const fs1 = require("fs");

function copyFile(source, destination) {
    const readStream = fs1.createReadStream(source);
    const writeStream = fs1.createWriteStream(destination);

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
        console.log("File copied using streams");
    });
}

copyFile("assyncc.txt" , "big.txt");
