function menu_click() {
    var menu = document.getElementById("menu");
    if (menu.style.height === "100vh") {
        menu.style.height = "0";
        menu.style.paddingTop = "0";
        menu.style.paddingBottom = "0";
    } else {
        menu.style.height = "100vh";
        menu.style.paddingTop = "5vw";
        menu.style.paddingBottom = "5vw";
    }
}
