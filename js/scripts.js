function beepBoop(number){
  var array = [];

    for (integer=0; integer<=number; integer++){
      var intString = integer
      if (intString % 3 ===0 && intString !== 0) {
        array.push("I'm sorry Dave, I can't allow you to do that");
      }else if (intString.toString().includes(1)) {
          array.push("Boop");
        }else if (intString.toString().includes(0)) {
          array.push("Beep");
        }else
          array.push(intString);
    }
 return array.join(" ");
}


$(function(){
  $("#beepboop").submit(function(e){
    e.preventDefault();
    var userInput = parseInt($("#number").val());
    $("#result").text(beepBoop(userInput));
  });

});
