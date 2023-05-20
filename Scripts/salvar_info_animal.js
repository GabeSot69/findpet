const form_animais = document.getElementById("form-animais");
const foto_pet = document.getElementById("foto_pet"); 
foto_pet.addEventListener('change', (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
        localStorage.setItem('foto_enviada_recente', reader.result);
    });

});
form_animais.addEventListener("submit", function(event){
    event.preventDefault();
    const especie = document.getElementById("especie").value;
    const nome_pet = document.getElementById("nome_pet").value;
    const raca_pet = document.getElementById("raca_pet").value;
    const descricao_pet = document.getElementById("descricao_pet").value; 
    const ultimo_local = document.getElementById("ultimo_local").value; 
    const num_contato = document.getElementById("num_contato").value; 
    
    const imagem_enviada = localStorage.getItem('foto_enviada_recente');
    const novo_animal = {
        foto: imagem_enviada,
        especie: especie,
        nome: nome_pet,
        raca: raca_pet,
        descricao: descricao_pet,
        local_visto: ultimo_local,
        contato: num_contato
    };
    
    const info_animais = JSON.parse(localStorage.getItem('info_animais'));
    info_animais.push(novo_animal);
    const array_animais = JSON.stringify(info_animais);
    localStorage.setItem('info_animais', array_animais);
    
    form_animais.reset();
    alert('Enviado com Sucesso!');
    window.location = './tela_principal.html';
}
);