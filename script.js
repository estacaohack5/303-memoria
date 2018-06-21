const personagens = ["wilson", "willow", "wolfgang", "wx78", "woodie", "wendy", "wes", "maxwell"];

const imagens = embaralhar(duplicar(personagens));

const cartas = document.querySelectorAll(".item");

function jogar(){
    if(this.classList.contains("active")){
        this.classList.remove("active");
        this.style.backgroundImage = "url('imgs/logo.png')"
    }
    else{
        this.classList.add("active");
        this.style.backgroundImage = `url('imgs/${imagens[Number(this.id)]}.png')`;
    }
}

for (let carta of cartas){
    carta.onclick = jogar;
}