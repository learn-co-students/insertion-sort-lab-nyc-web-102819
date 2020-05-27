function findMinAndRemove(array){
  let minIdx = 0
  for (let i in array) {
    if (array[minIdx] > array[i]) minIdx = i
  }
  return parseInt(array.splice(minIdx, 1).join())
}

function insertionSort(array){
  let sorted = []
  while (array.length) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
