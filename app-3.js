process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
})

/* прммер из туториала https://nodejs.org/docs/latest/api/process.html#process_process_argv
при простом запуске nodemon видим первые два аргумента -
0:sökvägen till node
1:sökvägen till filen

потом in terminal Launching the Node.js process as:

$ node process-args.js one two=three four
 and result:
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
*/

console.log(`Hello, ${process.argv[2]}. And you, ${process.argv[3]}`)
/*
А тут, если мы введём в строке терминала 'node Anna Boris' мы увидим "Хелло, Анна! И ты, Борис" */

/*
при таком раскладе нужно писать имя функции и аргв в консоль логе:


let add = function (a,b) {
  return a + b
};
let substract = function (a,b) {
 return a - b;
};
let multiply = function (a,b) {
  return a * b;
};
let divide = function (a,b) {
  return a / b;
}; */

