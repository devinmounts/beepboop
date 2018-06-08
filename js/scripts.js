function beepBoop(number){
  var response = [];

  for(i=0; i<=number; i++) {
    console.log(response);
    if (isNaN(i)) {
      response.push("not a number");
    } else if (i % 3 === 0) {
        response.push("I'm sorry Dave, I can't allow you to do that.")
      } else if (i === 1) {
        response.push("Boop")
      } else if (i === 0) {
          response.push("Beep")
      } else
          response.push(i)

          console.log(response);
  }
    return response.join(" ");
}

$(function(){
  $("#beepboop").submit(function(e){
    e.preventDefault();
    var userInput = parseInt($("#number").val());
    $("#result").text(beepBoop(userInput));
  });

});
