function beepboop(number){
var response = [];

  if (isNaN(number)) {
    response.push("not a number");
  } else if (number === 0) {
    response.push("Beep")
  } else if (number ===1) {
    response.push("Boop")
  } else if (number % 3 === 0) {
    response.push("I'm sorry Dave, I can't allow you to do that.")
  } else
    response.push(number)

      console.log(number)

  return response.join("");
}
