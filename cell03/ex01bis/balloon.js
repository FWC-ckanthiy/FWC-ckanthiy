let size = 200;
let colorIndex = 0;

const colors = ["red", "green", "blue"];

$("#balloon").click(function() {
    size += 10;

    if (size > 420) {
        size = 200;
    }

    colorIndex = (colorIndex + 1) % 3;

    $("#balloon").css({
        "width": size + "px",
        "height": size + "px",
        "background-color": colors[colorIndex]
    });
});

$("#balloon").mouseleave(function() {
    if (size > 200) {
        size -= 5;
    }

    colorIndex = (colorIndex - 1 + 3) % 3;

    $("#balloon").css({
        "width": size + "px",
        "height": size + "px",
        "background-color": colors[colorIndex]
    });
});