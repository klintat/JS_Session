function calculate(event) {
    var n1 = getNumberValueFromElement("num1");
    var n2 = getNumberValueFromElement("num2");
    var calculatedValue;

    switch (event) {
        case "+":
            calculatedValue = n1 + n2;
            break;
        case "-":
            calculatedValue = n1 - n2;
            break;
        case "*":
            calculatedValue = n1 * n2;
            break;
        case "/":
            calculatedValue = n1 / n2;
            break;
    }

    document.getElementById("result").value = calculatedValue;
}

function getNumberValueFromElement(id) {
    return parseInt(document.getElementById(id).value, 10);
}