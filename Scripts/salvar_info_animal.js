const form_animais = document.getElementById("form-animais");
form_animais.addEventListener("submit", function(event){
    event.preventDefault();
    const especie = document.getElementById("especie").value;
    const nome_pet = document.getElementById("nome_pet").value;
    const raca_pet = document.getElementById("raca_pet").value;
    const descricao_pet = document.getElementById("descricao_pet").value; 
    const ultimo_local = document.getElementById("ultimo_local").value; 
    const num_contato = document.getElementById("num_contato").value; 
    const foto_pet = document.getElementById("foto_pet").value; 
    

    form_animais.reset();
}
);