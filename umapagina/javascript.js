var btn = document.querySelector('button');

function random(numero) {
    return Math.floor(Math.random()*(numero+1));
   }

   btn.addEventListener("click", cu)

   function cu(){
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' +
   random(255) + ')';
    document.body.style.backgroundColor = rndCol;

    alert("tudo bao")
   }

var butao = document.getElementById('teste');
butao.addEventListener("click", alerta);
butao.addEventListener("click", alerta2);


function alerta() {
    alert ("Alô, mundo!");
}
function alerta2() {
    alert ("Olá, mundão");
}

var butaoremove = document.getElementById("remove")

butaoremove.addEventListener("click", remover)

function remover(){
    btn.removeEventListener("click", cu)
}

var butaoreadd = document.getElementById("readdd")

butaoreadd.addEventListener("click", readicionar)

function readicionar(){
    alert ("oi");
    btn.addEventListener("click", cu);
    
}