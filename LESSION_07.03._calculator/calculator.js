var firstNumber, hasFirstNumber, sign;

function numberPress (event) {
    let number = $(event.currentTarget).val();
    let originaVal = $("#textArea").val();
    $("#textArea").val(originaVal + number);
}

function clearPress (event) {
    $("#textArea").val("");
}

function processPress (event) {
    this.firstNumber = $("#textArea").val();
    $("#textArea").val("");
    this.hasFirstNumber = true;
    this.sign = $(event.currentTarget).val();
}

function resultPress (event) {
    if (this.firstNumber) {
        this.firstNumber = parseInt(this.firstNumber, 10);
        let secondNumber = parseInt($("#textArea").val(), 10);
        let calculatedValue;
        switch (this.sign) {
            case "+":
                calculatedValue = this.firstNumber + secondNumber;
                break;
            case "-":
                calculatedValue = this.firstNumber - secondNumber;
                break;
            case "*":
                calculatedValue = this.firstNumber * secondNumber;
                break;
            case "/":
                calculatedValue = this.firstNumber / secondNumber;
                break;
        }
        $("#textArea").val(calculatedValue);
    }
}