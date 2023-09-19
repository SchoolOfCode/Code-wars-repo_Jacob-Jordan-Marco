// code wars

// Kata 1 (Muliply)

// Function to return the result of a*b
// Set a variable as the result of a*b
// Return the result of a*b, stored in the variable 'result
// Call the function and pass in two arguments

function multiply(a, b){
    let result = a * b;
     return result;
   }
   
   multiply(5, 10);
   

// Kata 2 (Odd or Even)

// we need to call the function
// if input numbers remainder is 0 = even
// else input is odd

function evenOrOdd(number) {
  let modulo = number % 2;
  if (modulo === 0) {
    return "Even";
  } else {
    return "Odd";
  }
  
}
evenOrOdd(7)