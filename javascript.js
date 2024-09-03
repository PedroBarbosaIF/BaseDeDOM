var btn = document.querySelector('button');

function random(numero) {
    return Math.floor(Math.random()*(numero+1));
   }
   btn.onclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' +
   random(255) + ')';
    document.body.style.backgroundColor = rndCol;
   }