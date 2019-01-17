function countTo() {
    let max = Number(document.getElementById("num1").value) + 1;
    for (let i = 1; i < max; i ++) {
        if (i % 3 === 0 && i % 5 === 0) {
            let para = document.createElement("P");
            para.innerHTML = "FizzBuzz"
            document.getElementById("div1").appendChild(para);
        }
        else if (i % 3 === 0) {
            let para = document.createElement("P");
            para.innerHTML = "Fizz"
            document.getElementById("div1").appendChild(para);
        }
        else if (i % 5 === 0) {
            let para = document.createElement("P");
            para.innerHTML = "Buzz"
            document.getElementById("div1").appendChild(para);
        }
        else {
            let para = document.createElement("P");
            para.innerHTML = i
            document.getElementById("div1").appendChild(para);
        }
    }
}

function divThree() {
    let numTwo = Number(document.getElementById("num2").value);
    if (numTwo % 3 === 0) {
        let para = document.createElement("P");
        para.innerHTML = "Fizz"
        document.getElementById("div1").appendChild(para);
    } else {
        let para = document.createElement("P");
        para.innerHTML = "This number is not divisible by Three."
        document.getElementById("div1").appendChild(para);
    }
}

function divFive() {
    let numThr = Number(document.getElementById("num3").value);
    if (numThr % 5 === 0) {
        let para = document.createElement("P");
        para.innerHTML = "Buzz"
        document.getElementById("div1").appendChild(para);
    } else {
        let para = document.createElement("P");
        para.innerHTML = "This number is not divisible by Five."
        document.getElementById("div1").appendChild(para);
    }
}
