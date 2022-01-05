const fs = require('fs')
const path = require('path')

//method 1

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

// method 2

fs.readdir(process.argv[2],{ withFileTypes: true }, function(err, files) {
        if (err) throw err;
        console.log(files)
})