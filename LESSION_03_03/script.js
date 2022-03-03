// let oM = doceumnet.getElementById("myHeader1");
// oM.hide(); //"method not found!!"

// let iM = $("#myHeader1")
// oM.hide();
// $(documnet).ready(function() {
//    let oM = $("#myHeader1");
//    oM.hide();
// });

$(mySpecialFunction);
$(setHandlers);

function myFunction() {
    alert("Here is the code form my function");
}

function mySpecialFunction() {
    let oM = $("#myHeader1")
    oM.hide9
}

function setHandlers() {

    $(documnet.body).on("click", "#mySpecialButton", function() {
        $(":text").val("This is the defult text");
        console.log(this);
    })
}

$("#startCat").on("click", function() {
    for(let i = 0;1 < 500; i += 10){
        setTimeout(function() {
            $("#cat").css("margin.left", i + "px")
        }, (i / 10));
    }
})
