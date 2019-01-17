function goToOne() {
    let start = Number(document.getElementById("num1").value);
    let count = 0;
    while (start != 1) {
        if (start % 3 === 0) {
            start = start / 3;
            let para = document.createElement("P");
            para.innerHTML = "Divided the Number by 3. The new number is " + start + ".";
            document.getElementById("div1").appendChild(para);
            count = count + 1
        } else if ((start + 1) % 3 === 0) {
            start = start + 1;
            let para = document.createElement("P");
            para.innerHTML = "Added 1 to the number. The new number is " + start + ".";
            document.getElementById("div1").appendChild(para);
            count = count + 1
        } else {
            start = start - 1;
            let para = document.createElement("P");
            para.innerHTML = "Subtracted 1 from the number. The new number is " + start + ".";
            document.getElementById("div1").appendChild(para);
            count = count + 1
        }
    }
    let para = document.createElement("P");
    para.innerHTML = "This took " + count + " steps.";
    document.getElementById("div1").appendChild(para);
}
