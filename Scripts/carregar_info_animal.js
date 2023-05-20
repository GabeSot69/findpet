const celulas = document.getElementsByClassName("cell");
const especie = document.getElementsByClassName("especie");
const nome_pet = document.getElementsByClassName("nome_pet");
const raca_pet = document.getElementsByClassName("raca_pet");
const descricao_pet = document.getElementsByClassName("descricao_pet"); 
const ultimo_local = document.getElementsByClassName("ultimo_local"); 
const num_contato = document.getElementsByClassName("num_contato"); 
const foto_pet = document.getElementsByClassName("foto_pet"); 

const array_animais = localStorage.getItem('info_animais');
const animais = JSON.parse(array_animais);
num_animais = animais.length;
for(let i = 0; i < celulas.length; i++){
    foto_pet[i].src = animais[num_animais - 1 - i].foto;
    especie[i].textContent += animais[num_animais  - 1 - i].especie;
    nome_pet[i].textContent += animais[num_animais  - 1 - i].nome;
    raca_pet[i].textContent += animais[num_animais  - 1 - i].raca;
    descricao_pet[i].textContent += animais[num_animais  - 1 - i].descricao;
    ultimo_local[i].textContent += animais[num_animais - 1 - i].local_visto;
    num_contato[i].textContent += animais[num_animais - 1 - i].contato;
}