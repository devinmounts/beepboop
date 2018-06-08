function beepboop(number){
  var response = [];

  for(i=0; i<=number; i++) {
    response.push(i);
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
    return response.join("");
}
