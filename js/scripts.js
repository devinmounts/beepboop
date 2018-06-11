function beepBoop(number){
  var array = [];
  var intString = integer.toString();

    for (integer=0; integer<=number; integer++){

          var intString = integer.toString();
          if (intString.includes(1)){
              array.push([intString])
            }else
            array.push("false");
      // for (digit=0; digit<=[integer]; digit++){
      // console.log(digit);
      // array.push([digit.toString()])
      // }
      // forEach(array.includes(1)){
      //   array.push(true);
      // }


    }
 return array;
}























//   var response = [];
//   // var number = input.split("");
//
//   for(integer=0; integer<=number; integer++) {
//     var digits = (number[digits]);
//     for(digits=0; digits<=number; digits++)
//     console.log(number);
//     console.log(digits);
//     if (isNaN(digits)) {
//       response.push("not a number");
//     } else if (i % 3 === 0) {
//         response.push("I'm sorry Dave, I can't allow you to do that.")
//       } else if (i === 1) {
//         response.push("Boop")
//       } else if (i === 0) {
//           response.push("Beep")
//       } else
//           response.push(i)
//
//           console.log(response);
//   }
//     return response.join(" ");
// }

// $(function(){
//   $("#beepboop").submit(function(e){
//     e.preventDefault();
//     var userInput = parseInt($("#number").val());
//     $("#result").text(beepBoop(userInput));
//   });
//
// });
