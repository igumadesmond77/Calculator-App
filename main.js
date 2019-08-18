function displayValue(num) {
    return document.querySelector(".screen").innerHTML = num;
}

const formatNum = (num) => {
    let val = Number(num);
    let value = val.toLocaleString("en");
    return value;
}



let number = document.getElementsByClassName("number");
for(i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        let result = document.querySelector(".screen").innerHTML;
        result = result + this.id;
        displayValue(result);
    });
}

let operator = document.getElementsByClassName("operator");
for(i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        let result = document.querySelector(".screen").innerHTML;
        result = result + this.id;
        displayValue(result);
    });
}

document.querySelector(".equals").addEventListener("click", function() {
    let result = document.querySelector(".screen").innerHTML;
    if (result === "" || NaN || null || undefined || 0) {
        return document.querySelector(".screen").innerHTML = "";
    } else {
        result = eval(result);
        if(result !== NaN) {
            result = formatNum(result)
            displayValue(result);
        } else {
            return document.querySelector(".screen").innerHTML = "";
        }
    }  
});

let edit = document.getElementsByClassName("edit");
for(i = 0; i < edit.length; i++) {
    edit[i].addEventListener("click", function() {
        let result = document.querySelector(".screen").innerHTML;
        if (this.id === "backspace") {
            result = result.substr(0,result.length - 1);
        } else if (this.id === "clear") {
            result = "";
        }
        displayValue(result);
    });
}
