function DisplayPrice(){
  let userChoice = document.querySelector('input[name="Size"]:checked').id;
  let choiceValue = parseFloat(document.getElementById("toppings").value);
  let sizePrice;
  switch (userChoice) {
    case "small":
      sizePrice = 8;
      break;
    case "medium":
      sizePrice = 10;
      break;
    case "large":
      sizePrice = 14;
      break;
  }
  let total = sizePrice + choiceValue;
  document.getElementById("result").innerHTML = `The total is $${total.toFixed(2)}`;
}