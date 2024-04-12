
document.write("<h1>executando script2.js</h1> ")
document.write("Esse script esta em arquivo externo ")
document.write("referenciado no fim do body do HTML ")

function mudarCor(novaCor){
    var x = document.getElementById("demo");
    x.style.color = novaCor;
}

