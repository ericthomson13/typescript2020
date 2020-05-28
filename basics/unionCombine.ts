/*
Unions allow for multiple types to be used on a parameter or variable
*/

export function combineUnion (input1: number | string, input2: number | string) {
  // below line has error because only analyzed typeof = union not that you can add numbers and strings in JS
  // const result = input1 + input2;

  // below doesn't throw error because further typechecking is explicit
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  console.log('CombineUnion', result);
  return result;
}