/*

Unknown works a little better than 'any' but still shouldn't be used all the time.

*/
let userInput: unknown;
// set to string
let userName: string;

// below doesn't work because unknown not guaranteed string
// userName = userInput;

// Typescript will detec this check and allow compilation
if (typeof userInput === 'string') {
  userName = userInput;
}
