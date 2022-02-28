document.title = "Changed title";

// console.log(this.document.getElementById("MyParag"));
// console.log(document.getElementsByTagName("p"));
// console.log(docuemnt.getElementByName("MyTextName"));

document.getElementById("MyParag").style.color = "yellow";
document.getElementById("MyParag").style.fontSize = "xxx-large";

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    let element = paragraphs[i];
    element.style.color = "green";
    console.log(element.nodeValue);
}

let myClassElements = document.getElementsByClassName("myClass");
for (let i = 0; i < myClassElements.length; i++) {
    let element = myClassElements[i];
    element.style.fontSize = "large";
    // let childs = element.childNodes;
    // for (let j = 0; j < element.childNodes.length; j++) {
    //     if (element.childNodes[j].tagName.toLowerCase() === "p");
    //     element.childNodes[j].style.color = "red";

    let node = element.firstChild;
    while (node != null) {
        if (node.tagName !== undefined && node.tagName.toLowerCase() === "p")
            node.style.color = "red";
        console.log(node.parentNode)
        node = node.nextSibling;
    }

}