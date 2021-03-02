//задание:Write a program that uses a single synchronous filesystem operation to  
  //read a file and print the number of newlines (\n) it contains to the  
  //console (stdout), similar to running cat file | wc -l.  
   
  //The full path to the file to read will be provided as the first  
  //command-line argument (i.e., process.argv[2]). You do not need to make  
  //your own test file. 

//To perform a filesystem operation you are going to need the fs module from  
//the Node core library. To load this kind of module, or any other "global"  
//module, use the following incantation:
//const fs = require("fs");

/* fs.readFile('data.txt', 'utf8', (error, data) => { //  just to read a file
  console.log(data)
}) */

/* этот вариант не работает 
const data = fs.readFileSync('/path/to/file').toString();  // путь к файлу дан в условии задачи
console.log(data.split('\n').length);
 */
const fs = require("fs");
filePath = process.argv[2];
fileBuffer =  fs.readFileSync(filePath);
to_string = fileBuffer.toString();
split_lines = to_string.split("\n");
console.log(split_lines.length-1);

// ещё вариант:    const fs = require('fs')
    /* 
    const fs = require("fs");
    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines) 
    */