// 11a
const nums = [10, 20, 30];
console.log(nums);

nums[2] = 99;
console.log(nums);

// 11b
function getLastValue(array) {
  let lastValue = array.length - 1;
  const result = array[lastValue];

  console.log(result);

  return result;
}

getLastValue([1, 20, 22, 24, 5]);
getLastValue(['Hi', 'Hello', 'Good']);

// 11c
function arraySwap(array) {
  let arrayLastValue = array[array.length - 1];
  let arrayFirstValue = array[0];

  array[0] = arrayLastValue;
  array[array.length - 1] = arrayFirstValue;

  return array;
}

console.log(arraySwap([1, 20, 22, 25, 5]));
console.log(arraySwap(['Hi', 'Hello', 'Good']));

// 11d
for (i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 11e
for (i = 5; i >= 0 && i <= 5; i -= 1) {
  console.log(i);
}

// 11f
let m = 0;

while (m <= 10) {
  console.log(m);
  m += 2;
}

// 11g
const myArray = [1, 2, 3];
const result = [];

for (let i = 0; i < myArray.length; i++) {
  result.push(myArray[i] + 1);
}

console.log(result);

// 11h
function addOne(array) {
  const result = [];

  let i = 0;
  while (i < array.length) {
    result.push(array[i] + 1);
    i++;
  }

  return result;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

// 11i
function addNum(array, num) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }

  return result;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

// 11j
function addArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length || i < array2.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

// 11k
function countPositive(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    } 
  }

  return result
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 11l
function minMax(nums) {
  let result = {
    min: nums[0],
    max: nums[0]
  }

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];

    if (value < result.min) {
      result.min = value;
    }

    if (value > result.max) {
      result.max = value;
    }
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));