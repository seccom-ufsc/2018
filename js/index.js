document.body.onload = function() {
    var text = document.getElementById("description_block");

    document.getElementById("photo_block").onclick = function() {
        if (text.style.opacity === "1") {
            text.style.opacity = "0";
        } else {
            text.style.opacity = "1";
        }
    };
};
