let numberOne = parseInt(prompt("Geef de eerste nummer: "), 10);
let numberTwo = parseInt(prompt("Geef de tweede nummer: "), 10);
let operation = prompt("Welke operator? (+, -, /, x) ");
switch (operation) {
  case "+":
    if (operation === "+") {
      console.log(`${numberOne + numberTwo}`);
    }
    break;
  case "-":
    if (operation === "-") {
      console.log(`${numberOne - numberTwo}`);
    }
    break;
  case "x":
    if (operation === "x") {
      console.log(`${numberOne * numberTwo}`);
    }
    break;
  case "/":
    if (operation === "/") {
      if (numberTwo === 0) {
        console.log("Ongeldige tweede nummer(geen 0)");
      } else {
        console.log(`${numberOne / numberTwo}`);
      }
    }
    break;

  default:
    console.log("Ongeldige operator, kies tussen (+, -, /, x)");
    break;
}
