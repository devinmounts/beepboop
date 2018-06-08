function beepboop(number){
var response = [];

  if (isNaN(number)) {
    response.push("not a number");
  } else if (number === 0) {
    response.push("Boop")
  } else
    response.push(number)

      console.log(number)

  return response.join("");
}
