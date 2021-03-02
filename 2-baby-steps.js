//создать программу, выводящую суммму аргв, поданных в виде цифр 

let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];

console.log(Number(a) + Number(b) + Number(c));

/* process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
}); */