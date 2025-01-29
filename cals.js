let display = document.getElementById('display');

// Append characters to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

// Calculate square root
function squareRoot() {
  display.value = Math.sqrt(eval(display.value));
}

// Calculate sine (in radians)
function sin() {
  display.value = Math.sin(eval(display.value));
}

// Calculate cosine (in radians)
function cos() {
  display.value = Math.cos(eval(display.value));
}

// Calculate tangent (in radians)
function tan() {
  display.value = Math.tan(eval(display.value));
}

// Calculate x^y
function power() {
  display.value = eval(display.value.split('^')[0]) ** eval(display.value.split('^')[1]);
}
