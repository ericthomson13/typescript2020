// playing around with return types in functions

function add (n1: number, n2: number): number {
  return n1 + n2;
};

/*
introduction to void return value this is inferred.
Made void explicit for demo purposes.
Functions are not allowed to return undefined if no return.
Undefined is only used when returning without returning an actual value.
*/
function printResult (num: number): void {
  console.log('Result: ' + num);
};

printResult(add(5, 12));

// allows to set variable to require function type can be set to
let combineNums: (a: number, b: number) => number;

combineNums = add;


// allows for callback to be a defined function type
function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 3, printResult);
