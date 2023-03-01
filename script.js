/** @format */

let input = document.getElementById("input")

function addInput(value) {
  input.value += value
}

function clearInput() {
  input.value = ""
}

function backspace() {
  input.value = input.value.slice(0, -1)
}

function calculate(operator) {
  if (input.value === "") {
    return
  }

  let expression = input.value
  expression = expression.replace("x", "*")
  expression = expression.replace("/", "/")

  try {
    input.value = eval(expression)
    if (operator !== "=") {
      input.value += operator
    }
  } catch (error) {
    input.value = "Error"
  }
}
