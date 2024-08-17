window.onload = function() {
    document.addEventListener('deviceready', inicio, false);
}

function inicio() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', apertou);
}

var numeroCerto = 7;
var primeiraJogada = true;
function apertou() {

    numeroCerto = Number(numeroCerto)

    var campoNumero = document.getElementById('numero');
    var digitado = Number(campoNumero.value);
    if(primeiraJogada){
       
        numeroCerto = digitado;
        primeiraJogada = false;
        campoNumero.value = ""
        jogadas();
        console.log(numeroCerto)
    }else{

   
    var campoSaida = document.getElementById('saida');

    console.log(numeroCerto)

    if(digitado == numeroCerto) {
        campoSaida.innerHTML = 'Acertou!';
        primeiraJogada = true;
        PrimeiraJogada()
    } else {
        if(digitado > numeroCerto) {
            campoSaida.innerHTML = 'Digite um número menor!';
        } else {
            campoSaida.innerHTML = 'Digite um número maior!';
        }
    }
  
}

}



function PrimeiraJogada(){

    var botao = document.getElementById('botao');
 botao.value = "Salvar";
}

function jogadas(){


    var botao = document.getElementById('botao');
 botao.value = "Verificar";
}