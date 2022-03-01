// document.getElementById("button").addEventListener("click");

function some_action() {
    console.log("clicked")
}
document.getElementById("button").addEventListener("click", some_action)

let x = 0
document.getElementById("result").innerHTML = x
document.getElementById('button').addEventListener("click", iterate)

function iterate() {
    x += 1
    console.log(x)
    document.getElementById("result").innerHTML = x
}

setTimeout(function() {
    alert("Time is up!");
}, 10000);