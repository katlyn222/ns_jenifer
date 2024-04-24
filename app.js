alert('boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random()*10 +1);
console.log(numeroSecreto);
let chute = prompt('Escolha um número de 1 a 10');
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a 10`); 
     //se o chute for igual ao número secreto
    if(chute==numeroSecreto){
        break;
    } else {if (chute > numeroSecreto){
        alert(`o número secreto é menor que ${cuhute}`)
    }else {
        alert(`o número secreto é maior que ${cuhute} `)
    }
    //tentativas = tentativas+1
    tentativas++
}
        
}

let palavraTentativa = tentativas >1 ? 'tentativas' : ' tentativa'
alert(`isso ai! vocẽ descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);