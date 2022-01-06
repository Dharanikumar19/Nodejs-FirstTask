const fs = require('fs')
const path = require('path')

//method 1

fs.readdir(process.argv[2],{ withFileTypes: true }, function(err, allFiles) {
    if (err) throw err;
   const files = [];
   const directories = [];
    allFiles.forEach(dirent =>{
        if(dirent.isDirectory()){
            directories.push(dirent.name);   
        }else{
                files.push(dirent.name);       
            }
    })
    console.log("The Directories are - ↓");
    console.log(directories)
    console.log("The Files are - ↓");
    console.log(files)
})

// method 2

fs.readdir(process.argv[2], function (err, files) {
    files.forEach(file => {
        if (err) throw err;
        else if(path.extname(file) == "") {
            console.log(file + " -- " + "folder")
        } else {
            console.log(file + " -- " + "file")
        }
    }) 
})