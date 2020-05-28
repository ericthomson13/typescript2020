function combineNumOrString (input1: number | string, input2: number | string, resultType: string): number | string {
  let result;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultType === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combineNumOrString(30, 26, 'as-number');

const combinedNames = combineNumOrString('Eric', 'Thomson', 'as-string');

const agesAsString = combineNumOrString('30', '26', 'as-string');
const agesStringToNum = combineNumOrString('30', '26', 'as-number');