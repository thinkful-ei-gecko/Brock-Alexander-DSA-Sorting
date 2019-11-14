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

  console.log(left, right, counter);

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
  console.log(array, start, end);

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

function main(){

  let input = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
  quickSort(input);
}
main();