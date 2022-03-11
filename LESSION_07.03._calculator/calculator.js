var firstNumber, hasFirstNumber, sign;

function numberPress (event) {
    let number = $(event.currentTarget).val();
    let originalVal = $("#textArea").val();
    if (!((originalVal.indexOf(".") !== -1 || originalVal.length === 0) && number === ".") &&
        !(originalVal === "0" && number === "0") &&
        originalVal.length < 10) {
        $("#textArea").val(originalVal + number);
    }
}

function clearPress (event) {
    $("#textArea").val("");
    this.firstNumber = undefined;
    this.hasFirstNumber = undefined;
    this.sign = undefined;
    $(".operator").prop("disabled", false);
}

function processPress (event) {
    if ($("#textArea").val() !== "") {
        this.firstNumber = $("#textArea").val();
        $("#textArea").val("");
        this.hasFirstNumber = true;
        this.sign = $(event.currentTarget).val();
        $(".operator").prop("disabled", true);
    }
}

function resultPress (event) {
    if (this.firstNumber) {
        this.firstNumber = parseFloat(this.firstNumber, 10);
        let secondNumber;
        if ($("#textArea").val() === "") {
            secondNumber = 0;
        } else {
            secondNumber = parseFloat($("#textArea").val(), 10);
        }
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
        $("#textArea").val(Math.round(calculatedValue * 100000000) / 100000000);
        $(".operator").prop("disabled", false);
    }
}

function plusMinus (event) {
    let originalVal = $("#textArea").val();
    if (["", "0", "0."].indexOf(originalVal) === -1) {
        let newVal;
        if (originalVal[0] === "-") {
            newVal = originalVal.substring(1);
        } else {
            newVal = "-" + originalVal;
        }
        $("#textArea").val(newVal);
    }
}

function squareRoot (event) {
    let originalVal = parseFloat($("#textArea").val(), 10);
    if (originalVal >= 0) {
        let root = Math.sqrt(originalVal);
        $("#textArea").val(Math.round(root * 100000000) / 100000000);
    }
}

function del (event) {
    let originalVal = $("#textArea").val();
    if (originalVal !== "") {
        $("#textArea").val(originalVal.substring(0, originalVal.length - 1));
        if ($("#textArea").val() === "-") {
            $("#textArea").val("");
        }
    }
}

function precent (event) {
    let originalVal = $("#textArea").val();
    if (originalVal !== "") {
        let result = parseFloat(originalVal, 10) / 100;
        $("#textArea").val(Math.round(result * 100000000) / 100000000);
    }
}