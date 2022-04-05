const onContentChange = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatchange = function() {
        if(this.readyState === 4 && this.status === 200 ) {
            document.getEmelentById("main").innerHTML = this.responseText;
        }
    }

    xhttp.open("Get", "newContent.html", ture);
    xhttp.send();
}