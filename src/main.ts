import { checkSort } from './sort/testFunc';
import { selectronSort } from './sort/baseSort/selectronSort';
import { bubblingSort } from './sort/baseSort/bubblingSort';
import { insertSort } from './sort/baseSort/insertSort';
import { shellSort } from './sort/baseSort/shellSort';
import { mergeSort, getSmallSum } from './sort/advancedSort/mergeSort';
import { quickSort } from './sort/advancedSort/quickSort';
import { heapSort } from './sort/advancedSort/heapSort';
import { countingSort } from './sort/nonComparativeSort/countingSort';
import { radixSort } from './sort/nonComparativeSort/radixSort';
import { bucketSort } from './sort/nonComparativeSort/bucketSort';
const arr = [8, 5, 9, 3, 2];
console.log('test function', getSmallSum(arr));
// console.log('check function', checkSort(shellSort));

