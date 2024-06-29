function comprar(){
    //busca o tipo de ingresso
 let tipoIngresso = document.getElementById('tipo-ingresso').value;
    //busca a quantidade escolhida
 let qtd = document.getElementById('qtd').value;
    //verifica se qtd é vazio
 if(qtd == ""){
    alert('Você precisa preencher o campo "qtd".');
    return
 }

 qtd = parseInt(qtd);   
    //busca a quantidade ja existente 
 let qtdPista = parseInt(document.getElementById('qtd-pista').innerText);
 let qtdSuperior = parseInt(document.getElementById('qtd-superior').innerText);
 let qtdInferior = parseInt(document.getElementById('qtd-inferior').innerText); 


 
    // faz o calculo 
 let qtdIngresso = 0
 let ingresso = '';

 if (tipoIngresso == 'inferior'){
 qtdIngresso = qtdInferior
 ingresso = 'inferior';
    
 }else if (tipoIngresso == 'superior'){

    qtdIngresso = qtdSuperior
    ingresso = 'superior';

 }else{
    qtdIngresso = qtdPista
    ingresso = 'pista';
 }
 
 disponibilidade(qtd, qtdIngresso, ingresso);
     
}

function disponibilidade (qtd,qtdIngresso,ingresso){
    //se a quantidade escolhida é maior menor ou igual a disponivel
    if (qtd > qtdIngresso){
        alert('Não ha quantidade de ingressos disponiveis')
    }else{
        let calculo = qtdIngresso- qtd ;
        //retorna o resultado na tela
        document.getElementById(`qtd-${ingresso}`).innerText = calculo
    }

}

