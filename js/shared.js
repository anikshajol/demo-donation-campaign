// all type of getElementByID

function getElementByID(id) {
  const element = document.getElementById(id);
  return element;
}

// input value

function getInputValueById(id) {
  const inputAmount = document.getElementById(id).value;
  const inputValue = parseFloat(inputAmount);

  return inputValue;
}

// innerText

function getInnerTextById(id) {
  const innerText = document.getElementById(id).innerText;

  const innerTextValue = parseFloat(innerText);
  return innerTextValue;
}
