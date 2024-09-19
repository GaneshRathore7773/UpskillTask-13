// to count odd number in any array
function countoddnum(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (number[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}
let number = [4, 8, 2, 11, 6, 7, 10, 5];
console.log("array is=", number);
countodd = countoddnum(number);
// console.log("The total odd number is=", countodd);

// to get maximum or largest number in the array
function findmaxnum(arr) {
  let largest = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let maxnum = findmaxnum(number);
// console.log("the maximum number is =", maxnum);

// to get sum of element
function sumofElement(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// let number = [4, 8, 2, 11, 6, 7, 10];
totalsum = sumofElement(number);
// console.log("The sum of the array elements is:", totalsum);
// output of all question
console.log("the maximum number is =", maxnum);
console.log("The sum of the array elements is:", totalsum);
console.log("The total odd number is=", countodd);
