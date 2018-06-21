const personagens = ["wilson", "willow", "wolfgang", "wx78", "woodie", "wendy", "wes", "maxwell"];

const imagens = embaralhar(duplicar(personagens));

const cartas = document.querySelectorAll(".item");
const erros = document.querySelector("#erros");
let tentativas = 0;

let jogando = false;

function desativar(carta){
    carta.classList.remove("ativo");
    carta.style.backgroundImage = "url('imgs/logo.png')"
    carta.onclick = clicar;
}

function ativar(carta){
    carta.classList.add("ativo");
    carta.style.backgroundImage = `url('imgs/${imagens[Number(carta.id)]}.png')`;
    carta.onclick = null;
}

function verificar(){
    let ativos = document.querySelectorAll(".ativo");
    if(ativos[0].style.backgroundImage === ativos[1].style.backgroundImage){
        for(let carta of ativos){
            carta.classList.remove("ativo");
        }
    }
    else{
        for(let carta of ativos){
            desativar(carta);
        }
        tentativas++;
        erros.innerHTML = tentativas;
    }
}

function clicar(){
    
    if(jogando){
        jogando = false;
    }
    else{
        jogando = true;
    }
    
    if(this.classList.contains("ativo")){
        desativar(this);
    }
    else{
        ativar(this);
    }

    if(!jogando){
        setTimeout(verificar, 1000);
    }
}

for (let carta of cartas){
    carta.onclick = clicar;
}