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

$("#btn-series").click(function () {
    $("#btn-filmes").removeClass("selected");
    $("#btn-series").addClass("selected");
    $("#car-2").removeClass("hide");
    $("#car-1").addClass(" carrossel hide");
    $("#conteudo").load("./series/arrow.html");
});

$("#btn-filmes").click(function () {
    $("#btn-series").removeClass("selected");
    $("#btn-filmes").addClass("selected");
    $("#car-1").removeClass("hide");
    $("#car-2").addClass(" carrossel hide");
    $("#conteudo").load("./filmes/avengers3.html");
});