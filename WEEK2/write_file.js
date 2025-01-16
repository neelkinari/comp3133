const fs=require(`fs`)

/*
w - write only
a - append
r - read only
r+ - read and write
w+ - write and read
ws - write sync
*/

var dataBuffer =Buffer.from("Wonderful weather")

//write data from buffer to file asynchronously
//file will be created if it doesn't exist
//if file exist, existing data will be overwritten
fs.writeFile("output_file.txt",dataBuffer,(err)=>{
    if(err){
        console.log(`Error while writing to output_file.txt:
            ${JSON.stringify(err)}`); 
    }else{
        console.log(`data written successfully to output_file.txt`);  
    }
})

dataBuffer=
Buffer.from("\nThis content will be appended to existing content in the output_file.txt")

fs.writeFile("output_file.txt",dataBuffer,{flag:'a'},(err)=>{
    if(err){
        console.log(`Error while writing to output_file.txt:
            ${JSON.stringify(err)}`);
    }else{
        console.log(`data written successfully to output_file.txt`);
    }
})

//write to file synchronously
let err=fs.writeFileSync("output_file.txt",dataBuffer)
if(err){
    console.log(`Cannot write to output_file.txt synchronously:
        ${JSON.stringify(err)}`)
}else{
    console.log(`Synchronous write successful`);
}