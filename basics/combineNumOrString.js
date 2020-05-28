function combineNumOrString(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combineNumOrString(30, 26, 'as-number');
var combinedNames = combineNumOrString('Eric', 'Thomson', 'as-string');
var agesAsString = combineNumOrString('30', '26', 'as-string');
var agesStringToNum = combineNumOrString('30', '26', 'as-number');
