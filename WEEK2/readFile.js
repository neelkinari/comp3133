const fs=require('fs')

console.log(`Week 2 - fs module`);
console.log(`File reading operations`);

console.log(`/nTrying to read input_file.txt....`);
//fs.readFile() reads the file asynchronously
fs.readFile("input_file.txt", (err,data)=> {
    if(err){
        console.log(`Error while reading input_file.txt:
            ${JSON.stringify(err)}`);
        
    }

    //no error - use the data
    if(data){
        console.log(`data from input_file.txt: ${data}`);
    }else{
        console.log(`data from input_file.txt: ${data}`);
    }
})

console.log(`/nStarting to read file synchronously`);

const fileData=fs.readFileSync("input_file.txt")
console.log(`sync read - fileData: ${fileData.toString()}`);
console.log(`/nEnding synchronously file read`);

//Asynchronous function
const readFileData=async()=>{
    try{
        const data=await fs.promises.readFile("input_file.txt")
        console.log(`\nfileData from async function: \n${data}`);
    }catch(err){
        console.log(`Error while using async function to read file`);
        
    }
}

readFileData()