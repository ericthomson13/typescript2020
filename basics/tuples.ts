/*
This allows for fixed length and type in arrays
*/

const tuple: [number, string] = [2, 'author'];

// below would work in JS but will not work in TS because tuple[0] must be array
// tuple[0] = 'string';

// below will work and isn't currently caught my TS and won't enforce the length
// tuple.push('third');
