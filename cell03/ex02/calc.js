const leftNumber = document.getElementById("left-number");
const operator = document.getElementById("operator");
const rightNumber = document.getElementById("right-number");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function() {
    const left = Number(leftNumber.value);
    const right = Number(rightNumber.value);
    const op = operator.value;

    if (
        leftNumber.value === "" ||
        rightNumber.value === "" ||
        !Number.isInteger(left) ||
        !Number.isInteger(right) ||
        left < 0 ||
        right < 0
    ) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    if (op === "+") {
        result = left + right;
    } else if (op === "-") {
        result = left - right;
    } else if (op === "*") {
        result = left * right;
    } else if (op === "/") {
        result = left / right;
    } else if (op === "%") {
        result = left % right;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000);