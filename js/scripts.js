function beepboop(number){
  var response = [];
  var array = [number];
  console.log(array);

    if (isNaN(array)) {
        response.push("not a number");
      } else if (array % 3 === 0) {
        response.push("I'm sorry Dave, I can't allow you to do that.")
      } else if (array === 1) {
        response.push("Boop")
      } else if (array === 0) {
          response.push("Beep")
      } else
        response.push(array)

          console.log(array)

    return response.join("");
}
