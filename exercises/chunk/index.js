// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Option-0:
// function chunk(array, size) {
//   var main_arr = [];
//   var chunk_arr = [];
//   var chunk_counter = 0;
//   var main_counter = 0;
//
//   for (let item of array) {
//     main_counter++;
//     if (chunk_counter < size) {
//       chunk_arr.push(item);
//       chunk_counter++;
//     }
//     if (chunk_arr.length == size || main_counter == array.length) {
//       main_arr.push(chunk_arr);
//       chunk_counter = 0;
//       chunk_arr = [];
//     }
//   }
//
//   return main_arr;
// }

// Option-1:
// function chunk(array, size) {
//   const chunked = [];
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1]; // Take the last chunk from the chunked array.
//
//     if (!last || last.length === size) {
//       chunked.push([element]); // Create a new chunk + add element into it.
//     } else {
//       last.push(element); // Add element into a chunk.
//     }
//   }
//
//   return chunked;
// }

// Option-2:
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    // See JS's SLICE:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
