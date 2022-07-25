const temps: readonly number[] = [32, 44, 55, 66, 77, 88, 99];
// temps.push('string')

const coords: [number, number] = [30.3456, -21.1234];

const rgb: [number, number, number] = [255, 255, 255];

const arrA = [1, 2, 3, 4, 5];
// arrA.push('string')
const arrB = [...arrA]

const entries = { a: 1, b: 2, c: 3 };
const entriesArr = Object.entries(entries);

console.log(entriesArr, temps, coords, rgb, arrA, arrB);
export {}