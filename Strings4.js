function tripleFinder() {

    let string = document.getElementById("input").value;
    let length = string.length;
    let count = 0;
    
    for (let i = 0; i < length; i ++) {
        let pos = string.charAt(i);
        let posPlus = string.charAt(i + 1);
        let posMinus = string.charAt(i - 1);
        if (pos === posPlus && pos == posMinus) {
            count = count + 1;
        }
    }

    let para = document.createElement("P");
    para.innerHTML = "There are " + count + " triples.";
    document.getElementById("div1").appendChild(para);
}
