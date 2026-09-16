$("#calculate").click(function() {
    const left = Number($("#left-number").val());
    const right = Number($("#right-number").val());
    const op = $("#operator").val();

    if (
        $("#left-number").val() === "" ||
        $("#right-number").val() === "" ||
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