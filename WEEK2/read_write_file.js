const fs=require('fs')

//opens the file is read file mode
fs.open("data.txt","r+",(err,fd)=>{
    if(err){
        console.log(`Unable to open data.txt due to error:
            ${JSON.stringify(err)}`);
    }
    console.log(`File successfully opened for processing`);

    let dataBuffer = Buffer.alloc(7)
    const dataFromFile=fs.readSync(fd,dataBuffer,0,Buffer.length)

    console.log(`dataBuffer: ${dataBuffer.toString()}`);
    console.log(`dataFromFile: ${dataFromFile}`);

    let dataToWrite="\nThis is a new line to write to data.txt"
    fs.write(fd,dataTowrite,(err)=>{
        if(err){
            console.log(`Unable to write to file data.txt:
                ${JSON.stringify(err)}`)
        }else{
            console.log(`Data successfully written to data.txt`);

            fs.close(fd)
        }
    })
})