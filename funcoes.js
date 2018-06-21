//Gerar um número aleatório
function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Criar um novo vetor, com o conteudo do vetor de entrada repetido duas vezes
function duplicar(vetor){
    let novoVetor = [];
    for(let i=0; i<2; i++){
        for(let item of vetor){
            novoVetor.push(item);
        }
    }
    return novoVetor;
}

//Criar um novo vetor, com os itens do vetor de entrada embaralhados.
function embaralhar(vetor){
    let novoVetor = [];
    for(let item of vetor){
        novoVetor.push(item);
    }
    for(let i = 0; i<novoVetor.length; i++){
        let posicaoAleatoria = aleatorio(0,novoVetor.length-1);
        let temporario = novoVetor[posicaoAleatoria];
        novoVetor[posicaoAleatoria] = novoVetor[i];
        novoVetor[i] = temporario;
    }
    return novoVetor;
}