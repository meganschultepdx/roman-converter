  // var ones = ["I", "V", "X"];
  // var tens = ["X", "L", "C"];
  // var tens = ["C", "D", "M"];
  // var thousands = ["M"];
var input = $("#input").val();

function romanNumbers(input) {

  var output = "";

  for (var i = input; i > 0; i-=1000) {
    if (input >=1000) {
      output += "M";
      input -= 1000;
    }

  for (var i = input; i > 0; i-=500) {
    if (input >=500) {
      output += "D";
      input -= 500;
    }

  for (var i = input; i > 0; i-=100) {
    if (input >=100) {
      output += "D";
      input -= 100;
    }

  for (var i = input; i > 0; i-=50) {
    if (input >=50) {
      output += "D";
      input -= 50;
    }

  for (var i = input; i > 0; i-=10) {
    if (input >=10) {
      output += "D";
      input -= 10;
    }

    for (var i = input; i > 0; i-=5) {
      if (input >=5) {
        output += "D";
        input -= 5;
      }

    for (var i = input; i > 0; i-=1) {
      if (input >=1) {
        output += "D";
        input -= 1;
      }

  }

  return output;

}

console.log(
 romanNumbers(2000),
 romanNumbers(2000) === "MM"
);












  //
  //
  // var roman = roman.toUpperCase();
  //
  //  i = roman.length;

// function romanNumbers(input) {
//
//   if (typeof input !== "number") {
//     return false;
//   } else if (input === 1){
//     return "I";
//   } else if (input === 5){
//     return "V";
//   } else if (input === 10) {
//     return "X";
//   } else {
//     console.log(error);
//   }
// }
//
// console.log(romanNumbers("h"))
//

   // } else if {
   //   for(var i=1, i<=3, i++) {
   //   return input += "I".join;
   //   }
   // }
