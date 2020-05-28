/*
Enums allow for values to be related to a named set of constants that can be numeric or string values.
Enums are a custom type
*/


// enum { ...Identifiers }
// can assign own values if you want to each of these if desired

enum Privledges { READ_ONLY, WRITE_ONLY, READ_AND_WRITE };

console.log(Privledges.READ_AND_WRITE);