function heapSort(arr) {
  let n = arr.length;

  // Build a max heap from the array
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root (maximum) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Re-heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Helper function to maintain the max-heap property
function heapify(arr, heapSize, rootIndex) {
  let largest = rootIndex;
  let left = 2 * rootIndex + 1;
  let right = 2 * rootIndex + 2;

  // Check if left child exists and is greater than root
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // Check if right child exists and is greater than current largest
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root, swap and continue heapifying
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    heapify(arr, heapSize, largest);
  }
}

// Example usage:
console.log(heapSort([12, 11, 13, 5, 6, 7]));
// Output: [5, 6, 7, 11, 12, 13]