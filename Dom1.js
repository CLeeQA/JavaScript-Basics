let output = 0;

function createPara() {
    if (output == 0) {
        output = 1;
        document.getElementById("div1").innerHTML = "<p> This is where the text will be. </p>";
    }
}

function modifyPara() {
    if (output == 1) {
        document.getElementById("div1").innerHTML = "<p> " + document.getElementById("input").value + " </p>";
    }
}

function deletePara() {
    output = 0;
    document.getElementById("div1").innerHTML = "";
}
