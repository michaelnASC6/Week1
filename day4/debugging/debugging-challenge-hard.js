// Point of View

function prompt(str) {
    const lastIndex = str.length - 1;
    if (str.charCodeAt(lastIndex) === 63) {
      return "l3fT";
    }
    return "riGHt";
  }
  
  function promptDirection(str) {
    let result = prompt(str);
    if (result.toLowerCase() === "left") return "L";
    if (result.toLowerCase() === "right") return "R";
    throw new Error("Invalid direction: " + result);
  }
  
  function look() {
    if (promptDirection("Which way?") === "L") {
      return "a house";
    } else {
      return "two angry bears";
    }
  }
  
  try {
    console.log("You see ", look());
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
  // Expected result: "You see two angry bears"
  
  // How to debug and modify the code to achieve the expected result?
//==========================================================================

//! Should console.log a string of the number (1st parameter)
//! in the base indicated as 2nd parameter

function numberToString(n, base = 10) {
  let result = "",
    sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  while (n > 0) {
    result = String(n % base) + result;
    n /= base;
  }
  return sign + result;
}
console.log(numberToString(13, 10));
//==============================================================

// 3. Hard
// Expected Output: 'Aren\'t bonfires fun!?'
function binaryToEnglish(str) {
  biString = str.split('');
  uniString = [];
  
/*using the radix (or base) parameter in parseInt, we can convert the binary 
  number to a decimal number while simultaneously converting to a char*/

   for(i=0;i < biString.length;i++){
   uniString.push(String.fromCharCode(parseInt(biString[i], 5))); 
  }
//we then simply join the string
  return uniString.join(' ');
}

// test here
binaryToEnglish("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//=================================================================================================

 