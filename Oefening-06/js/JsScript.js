let numberInput = parseInt(prompt("Wat is de cijfer?"));
switch (numberInput) {
  case 0:
    {
      console.log("Zeer slecht");
    }
    break;
  case 1:
    {
      console.log("Zeer slecht");
    }
    break;
  case 2:
    {
      console.log("Zeer slecht");
    }
    break;

  default:
    if (numberInput > 10)
      console.log("Buiten het cijfer. Kies tussen nummers 0-10");
    break;
}
