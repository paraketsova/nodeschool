/* ...
  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
   
  For example, if you get 'txt' as the second argument then you will need to  
  filter the list to only files that end with .txt. Note that the second  
  argument will not come prefixed with a '.'.  
   
  Keep in mind that the first arguments of your program are not the first  
  values of the process.argv array, as the first two values are reserved for  
  system info by Node.  
   
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O.  
--------------
  function countNewlines() {
//   const filePath = process.argv[2];
//   fs.readFile(filePath, function doneReading(err, fileContents) {
//     if (err) console.log(err);

//     const to_string = fileContents.toString();
//     const split_lines = to_string.split("\n").length - 1;
//     console.log(split_lines);
//   })
// }
*/

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, process.argv[2])
const fileExtension = process.argv[3];

function printList () {
  fs.readdir(dirPath, function doneReading(err, files) {
    if (err) console.log(err);

    //надо сделать forEach  видимо.
    filesList = files.filter(function(e){
      return path.extname(e).toLowerCase() === ('.' + fileExtension)
    });
    console.log(filesList);
  })
}