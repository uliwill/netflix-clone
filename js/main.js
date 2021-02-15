$(function () {
    $("#conteudo").load("./filmes/avengers3.html");
})

function CarregaPage(page) {
    //console.log(page);
    $("#conteudo").load(page);
    window.event.preventDefault();
}


function navResponsivo() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}