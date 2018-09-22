document.body.onload = function() {
    var palestras = document.getElementById("palestras");
    var minicursos = document.getElementById("minicursos");
    var outros = document.getElementById("outros");

    document.getElementById("p_click").onclick = function() {
        minicursos.style.zindex = "-1";
        outros.style.zindex = "-1";
        palestras.style.zindex = "0";
        minicursos.style.opacity = "0";
        outros.style.opacity = "0";
        palestras.style.opacity = "1";
    };

    document.getElementById("m_click").onclick = function() {
        palestras.style.zindex = "-1";
        outros.style.zindex = "-1";
        minicursos.style.zindex = "0";
        palestras.style.opacity = "0";
        outros.style.opacity = "0";
        minicursos.style.opacity = "1";
    };

    document.getElementById("o_click").onclick = function() {
        palestras.style.zindex = "-1";
        minicursos.style.zindex = "-1";
        outros.style.zindex = "0";
        palestras.style.opacity = "0";
        minicursos.style.opacity = "0";
        outros.style.opacity = "1";
    };
}
