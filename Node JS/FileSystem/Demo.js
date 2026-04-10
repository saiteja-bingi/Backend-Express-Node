const fs=require("fs")
fs.writeFile('sample.txt','Testing Fs Module',(err)=>{
    if(err){
        console.log("error has occureed");
    }
    else{
        console.log("File created successfully")
    }
})

fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error has occureed");
    }
    else{
        console.log(data)
    }
})