// Task 1: Mini-Max Sum
// method 1
const numbers = [1, 2, 3, 4, 5];
const findMiniMaxSum1 = (arr) => {
  arr.sort((a, b) => a - b);
  let miniSum = arr[0] + arr[1] + arr[2] + arr[3];
  let maxSum = arr[1] + arr[2] + arr[3] + arr[4];
  return [miniSum, maxSum];
};
const [miniValue, maxValue] = findMiniMaxSum1(numbers);
console.log("MiniSum:", miniValue, "MaxSum:", maxValue);

// method 2
const findMiniMaxSum2 = (arr) => {
  arr.sort((a, b) => a - b);
  let miniSum = 0;
  let maxSum = 0;
  for (let i = 0; i < 4; i++) {
    miniSum += arr[i];
  }
  for (let i = 1; i < 5; i++) {
    maxSum += arr[i];
  }
  console.log(maxSum, miniSum);
};
findMiniMaxSum2(numbers);

//calculate sums using four of the five integers in array:
const calculateSums = (numbers) => {
  const totalSum = numbers.reduce((number, sum) => number + sum, 0);
  const query = [];

  for (let i = 0; i < numbers.length; i++) {
    const sum = totalSum - numbers[i];
    query.push(sum);
  }

  return query;
};

const result = calculateSums(numbers);

result.forEach((item, index) => {
  console.log(`${index + 1}: ${item}`);
});

// Bouns:
// + Count total of array
const total = numbers.reduce((number, sum) => number + sum, 0);
// + Find min in array
// + Find max in array
let minNumber = Infinity;
let maxNumber = -Infinity;
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
// const minNumber = Math.min(...numbers);
// const maxNumber = Math.max(...numbers);
// + Find even elements in array
// + Find odd elements in array
const evenNumber = numbers.filter((item) => item % 2 === 0);
const oddNumber = numbers.filter((item) => item % 2 === 1);
console.log(
  `Total: ${total} | minNumber: ${minNumber} | maxNumber: ${maxNumber} | evenNumber: ${evenNumber} | oddNumber: ${oddNumber}`
);
