
//funções e declarações
let listaDeNumerosSorteados = [];
let quantidadeDeNumeros = 10;
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()*quantidadeDeNumeros+1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosNaLista==quantidadeDeNumeros){
    listaDeNumerosSorteados= [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}
function aparecerNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ""; 
}
function telaInicial(){
    let fraseInicial = `Escolha um numero entre 1 e ${quantidadeDeNumeros}`
    aparecerNaTela('h1',"Jogo do número Secreto");
    aparecerNaTela('p',fraseInicial);
    }

let numeroaleatorio = gerarNumeroAleatorio();
let tentativas = 0;

//tela inicial
telaInicial();

//inicio do jogo
function verificarChute(){
    tentativas ++;
    let chute = document.querySelector('input').value;
    if(chute == numeroaleatorio){
        let palavraTentativa = tentativas == 1? "tentativa":"tentativas";
        let mensageTentativas=`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        aparecerNaTela('h1',"Acertou");
        aparecerNaTela('p',mensageTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute> numeroaleatorio){
        aparecerNaTela('h1',"Errou");
        aparecerNaTela('p',"O número secreto é menor!");
    }else {
        aparecerNaTela('h1',"Errou");
        aparecerNaTela('p',"O número secreto é maior!");
    }
    limparCampo()
}
}
//reiniciando jogo
function reiniciarjogo() {
    telaInicial();
    numeroaleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
