// let mainSectionElement = this.document.getElementsByID("mainSection");

// while (true) {
//     let userInput = prompt("Enter the text");
//     if (userInput === null)
//         break;
//     let elementPar = document.createElement("p");
//     // let paraText =
//     //     documnet.creatTextNode(userInput);
//     elementPar.textContent = userInput;
//     elementPar.appendChild(paraText);
//     mainSectionElement.appendChild(elementPar);
// }

function init() {
    let elementPar = document.createElement("p");
    let mainSectionElement = this.document.getElementsByID("mainSection");
    elementPar.textContent = "Random text";
    elementPar.appendChild(paraText);
    mainSectionElement.appendChild(elementPar);
    console.log("Element 2323");
    setTimeout(function() {
        alert("There are 5 second passed")
    }, 5000);
}

function showInfo() {
    alert("Here is the info")
}