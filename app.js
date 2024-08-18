let num = prompt("Please enter a number:");


if (num === null || num === "") {
  num = 5;
}


num = parseInt(num);
document.write(`<h1>Multiplication Table of ${num}</h1>`);

document.write("<table border='1'>");

for (let i = 1; i <= 10; i++) {
  
  document.write("<tr>");
  
  document.write(`<td>${i}</td>`);
  

  document.write(`<td>${num} x ${i} = ${num * i}</td>`);
  
  document.write("</tr>");
}
document.write("</table>");