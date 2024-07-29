let array = [];
let pageContainer = document.getElementById('pageContainer');

function moveToTopLeftAndGenerate() {
  pageContainer.classList.add('move-to-top-left'); // Trigger the animation class
  setTimeout(() => {
    array = generateRandomArray(10); // Generate 10 random numbers (change as needed)
    renderArray();
    pageContainer.classList.remove('move-to-top-left'); // Remove animation class
  }, 500); // Render new values after a short delay (to allow animation)
}

function startMergeSort() {
  mergeSort(array, 0, array.length - 1);
}

function mergeSort(arr, l, r) {
  if (l >= r) return;
  let m = l + Math.floor((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;
  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let i = 0, j = 0, k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
    setTimeout(renderArray, 500); // Render array after each comparison (for visualization)
  }

  while (i < n1) {
    arr[k++] = L[i++];
    setTimeout(renderArray, 500); // Render array after each comparison (for visualization)
  }

  while (j < n2) {
    arr[k++] = R[j++];
    setTimeout(renderArray, 500); // Render array after each comparison (for visualization)
  }
}

function generateRandomArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1); // Generate random numbers between 1 and 100
  }
  return arr;
}

function renderArray() {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = ''; // Clear previous content

  array.forEach(num => {
    const arrayItem = document.createElement('div');
    arrayItem.classList.add('array-item');
    arrayItem.textContent = num;
    arrayContainer.appendChild(arrayItem);
  });
}
