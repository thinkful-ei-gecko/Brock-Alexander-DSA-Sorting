const LinkedList = require('./LinkedList');

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}

function mergeSort(array, counter = 0) {
  if (array.length <= 1) {
    return array;
  }
  counter++;
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  // console.log(left, right, counter);

  left = mergeSort(left, counter);
  right = mergeSort(right, counter);
  return merge(left, right, array, counter);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  //console.log(array);

  return array;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

// function main() {
//   let input = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
//   quickSort(input);
// }


/////

function size(list) {
  let currentNode = list.head;
  let counter = 0;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    counter++;
  }
  return counter;
}

function findPrevious(list, item) {
  let currentNode = list.head;
  let previousNode = list.head;

  if (list.head === item) {
    return null;
  }

  while (currentNode.value !== item && currentNode.next !== null) {
    currentNode = currentNode.next;
    if (currentNode.value === item) {
      return previousNode.value;
    }
    previousNode = currentNode;
  }
}

function mergeSortLL(LL) {
  const llAsArr = [];
  while (LL.head) {
    llAsArr.push(LL.head.value);
    LL.remove(LL.head.value);
  }
  return mergeSort(llAsArr);
}

const list = new LinkedList();
const arr = [14, 17, 4, 13, 15, 19, 10, 3, 16, 9, 12];

arr.forEach(item => {
  list.insertFirst(item);
});

// console.log(mergeSortLL(list));

// main();

function bucketSort(array, max, min) {
  let result = [];

  for (let i = 0; i < max; i++) {
    result[i] = 'EMPTY';
  }

  for (let i = 0; i < array.length; i++) {
    result[array[i] - min] = array[i];
  }

  return result.filter(item => item !== 'EMPTY');
}

// console.log(bucketSort(arr, 19, 3));

function shuffled(arr) {
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    swap(arr, i, randomIndex);
  }
  return arr;
}

console.log(shuffled(arr));

let books = ['Book 1', 'Book 2', 'Alice in Sadland', 'Suicide is Painless', 'whatever', 'Sadbook'];

function bookSorter(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}

console.log(bookSorter(books));