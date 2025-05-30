function bubbleSort(arr) {
  let n = arr.length;
  // Outer loop for each pass
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for pairwise comparisons
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if elements are in the wrong order
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Destructuring swap
      }
    }
  }
  return arr;
}

// Example:
console.log(bubbleSort([5, 1, 4, 2, 8])); // Output: [1, 2, 4, 5, 8]