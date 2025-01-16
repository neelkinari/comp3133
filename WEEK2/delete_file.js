const fs=require('fs')

//Make sure to create file_to_delete.txt before testing this operation
// fs.unlink() will delete file asynchronously
fs.unlink("file_to_delete.txt",(err)=>{
    if(err){
        console.log(`Unable to delete file_to_delete:
            ${JSON.stringify(err)}`);
        
    }else{
        console.log(`File deleted successfully`);
        
    }
})