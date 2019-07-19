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

  //Finished