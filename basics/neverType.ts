/*

'never' type can be used for a function that doesn't actually return anything ever.  This does not ever produce a value.

Without specifying 'never' TS will infer 'void' as the return type.

'never' allows for clearer intentions than 'void'

*/

function generateError (message: string, code: number): never {
  throw {message, errorCode: code};
};

generateError('An Error Occurred', 500);