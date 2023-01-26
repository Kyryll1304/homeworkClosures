const closures = () => {
  let sum = 0;
  return function (num = 0) {
    sum += num;
    return sum;
  };
};
let sum = closures();

console.log(sum(5));
console.log(sum(4));
console.log(sum(2));
console.log(sum(10));
