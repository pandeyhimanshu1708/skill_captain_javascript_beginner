function countingSort(arr) {
    const max = Math.max(...arr);
    
    const count = new Array(max + 1).fill(0);
    for (let num of arr) {
      count[num]++;
    }
  
    let sortedArray = [];
    for (let i = 0; i <= max; i++) {
      while (count[i] > 0) {
        sortedArray.push(i);
        count[i]--;
      }
    }
  
    return sortedArray;
  }