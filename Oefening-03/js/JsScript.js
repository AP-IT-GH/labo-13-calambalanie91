let numberOne = parseInt(prompt("Geef de eerste nummer: "), 10);
let numberTwo = parseInt(prompt("Geef de tweede nummer: "), 10);
let operation = prompt("Welke operator? (+, -, /, x) ");
if (
  operation === "+" ||
  operation === "-" ||
  operation === "/" ||
  operation === "x"
) {
  if (operation === "+") {
    console.log(`${numberOne + numberTwo}`);
  } else if (operation === "-") {
    console.log(`${numberOne - numberTwo}`);
  } else if (operation === "x") {
    console.log(`${numberOne * numberTwo}`);
  } else if (operation === "/") {
    if (numberTwo === 0) {
      console.log("Ongeldige tweede nummer(geen 0)");
    } else {
      console.log(`${numberOne / numberTwo}`);
    }
  }
} else {
  console.log("Ongeldige operator, kies tussen (+, -, /, x)");
}
