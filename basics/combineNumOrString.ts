function combineNumOrString (input1: number | string, input2: number | string, resultType: 'as-number' | 'as-string'): number | string {
  let result;

  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combineNumOrString(30, 26, 'as-number');

const combinedNames = combineNumOrString('Eric', 'Thomson', 'as-string');

const agesAsString = combineNumOrString('30', '26', 'as-string');
const agesStringToNum = combineNumOrString('30', '26', 'as-number');