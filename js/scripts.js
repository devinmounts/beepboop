function beepboop(number){
var response = []

  if (isNaN(number)) {
    response.push("This is not a number.");
  }
  response.push(number)

  console.log(number)
return response.join("");
}
