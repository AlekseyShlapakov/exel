const arr = [1, 7, 9, 5, 22, 55, 875]

const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(start <= end) {

    if(arr[middle] === key) {
      return middle;
    } else if (arr[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

console.log("binarySearch(arr, 5)", binarySearch(arr, 55));