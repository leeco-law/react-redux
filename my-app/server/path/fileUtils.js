'use strict';
let fs = require('fs');

function explorer(path) {
    let fileList = [];
    let files = fs.readdirSync(path + "\\");
    if (files && files instanceof Array) {
        files.map((file, index) => {
            try {
                let stat = fs.statSync(path + '\\' + file);
                if (stat.isDirectory()) {
                    console.log(path + '\\' + file);
                    fileList.push(path + '\\' + file);
                    //fileList.push({ dir: file, children: explorer(path + "\\" + file) });
                } else if (stat.isFile()) {
                    console.log(path + '\\' + file);
                    fileList.push(path + '\\' + file);
                }
            } catch (error) {
                console.error(error);
            }
        });
    }
    return fileList;
}
exports.explorer = explorer;