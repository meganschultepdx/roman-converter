function romanNumbers(input) {

  var output = "";

  for (var i = input; i > 0; i-=1000) {
    if (input >=1000) {
      output += "M";
      input -= 1000;
    }
  }
  for (var i = input; i > 0; i-=900) {
    if (input >=900) {
      output += "CM";
      input -= 900;
    }
  }
  for (var i = input; i > 0; i-=500) {
    if (input >=500) {
      output += "D";
      input -= 500;
    }
  }
  for (var i = input; i > 0; i-=400) {
    if (input >=400) {
      output += "CD";
      input -= 400;
    }
  }
  for (var i = input; i > 0; i-=100) {
    if (input >=100) {
      output += "C";
      input -= 100;
    }
  }
  for (var i = input; i > 0; i-=90) {
    if (input >=90) {
      output += "XC";
      input -= 90;
    }
  }
  for (var i = input; i > 0; i-=50) {
    if (input >=50) {
      output += "L";
      input -= 50;
    }
  }
  for (var i = input; i > 0; i-=40) {
    if (input >=40) {
      output += "XL";
      input -= 40;
    }
  }
  for (var i = input; i > 0; i-=10) {
    if (input >=10) {
      output += "X";
      input -= 10;
    }
  }
  for (var i = input; i > 0; i-=9) {
    if (input >=9) {
      output += "IX";
      input -= 9;
    }
  }
  for (var i = input; i > 0; i-=5) {
    if (input >=5) {
      output += "V";
      input -= 5;
    }
  }
  for (var i = input; i > 0; i-=4) {
    if (input >=4) {
      output += "IV";
      input -= 4;
    }
  }
  for (var i = input; i > 0; i-=1) {
    if (input >=1) {
      output += "I";
      input -= 1;
    }
  }

  return output;

}

console.log(
 romanNumbers(1999),
 romanNumbers(1999) === "MCMXCIX"
);

$(document).ready(function(){
  $("#formConverter").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var output = romanNumbers(input);
    $(".outputClass").text(output);

    $("#output").show();

  });

});













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
