// optimal solution
function sumUptoN(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumUptoN(5));

// brute force approach

// function sumUptoN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
