document.body.onload = function() {
    var palestras = document.getElementById("palestras");
    var minicursos = document.getElementById("minicursos");
    var outros = document.getElementById("outros");

    document.getElementById("p_click").onclick = function() {
        palestras.style.display = "block";
        minicursos.style.display = "none";
        outros.style.display = "none";
    };

    document.getElementById("m_click").onclick = function() {
        minicursos.style.display = "block";
        palestras.style.display = "none";
        outros.style.display = "none";
    };

    document.getElementById("o_click").onclick = function() {
        outros.style.display = "block";
        minicursos.style.display = "none";
        palestras.style.display = "none";
    };
}
