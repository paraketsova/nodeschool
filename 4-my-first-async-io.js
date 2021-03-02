//Write a program that uses a single asynchronous filesystem operation to  
//read a file and print the number of newlines it contains to the console  
//(stdout), similar to running cat file | wc -l.  
 
//The full path to the file to read will be provided as the first  
//command-line argument. 

//--- вариант мой, рабочий:-----

// const fs = require("fs");
// function countNewlines() {
//   const filePath = process.argv[2];
//   fs.readFile(filePath, function doneReading(err, fileContents) {
//     if (err) console.log(err);

//     const to_string = fileContents.toString();
//     const split_lines = to_string.split("\n").length - 1;
//     console.log(split_lines);
//   })
// }

// countNewlines();

// --- вариант от Лёши----
const fs = require("fs");
const util = require('util');
const readFile2 = util.promisify(fs.readFile);

async function countNewlines2() {
  const filePath = process.argv[2];
  const fileContents = await readFile2(filePath);
  // if (err) console.log(err);
  const to_string = fileContents.toString();
  const split_lines = to_string.split("\n").length - 1;
  console.log(split_lines);
}

countNewlines2();

/* 
function countNewlines (callback) {
  filePath = process.argv[2];
  fileBuffer = fs.readFile(filePath);
  callback();
}

function logNumber() {
  to_string = fileBuffer.toString();
  split_lines = to_string.split("\n");
  console.log(split_lines.length-1);
}
 */