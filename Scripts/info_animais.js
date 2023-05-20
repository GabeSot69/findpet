window.onload = function () {
    if (!('foiCarregadaUmaVez' in localStorage)) {
        const info_animais = [
            {
                foto: "../Images/Hope.jpg",
                especie: "Gata, fêmea",
                nome: "Hope",
                raca: "Vira-lata",
                descricao: "É assustada mas não é violenta, atende pelo nome, é castrada e vacinada.",
                local_visto: "Campo do Buracão, Nova Esperança.",
                contato: "92 00000 0321"
            },

            {
                foto: "../Images/Mia.jpg",
                especie: "Gata, fêmea",
                nome: "Mia",
                raca: "Vira-lata",
                descricao: "Dócil, atende pelo nome de Mia, tem uma mancha marrom nas costas.",
                local_visto: "Rua Rui Barbosa, centro, próximo às óticas.",
                contato: "92 00000 0111"
            },

            {
                foto: "../Images/Kasumi.jpg",
                especie: "Cachorro, fêmea",
                nome: "Kasumi",
                raca: "Vira-lata",
                descricao: "Pelagem branca, amarela e preta, dócil. Tem uma coleira verde.",
                local_visto: "Na entrada do lírio do vale na Avenida Laguna.",
                contato: "92 00000 2301"
            },

            {
                foto: "../Images/Mina.jpg",
                especie: "Ave, fêmea",
                nome: "Mina",
                raca: "--",
                descricao: "Penas cinzas e amarelas. Um pouco arisca, mas não ataca.",
                local_visto: "Na descida da norte ferro, no Manoa.",
                contato: "92 00000 0111"
              },
            
            {
                foto: '../Images/Shazam.jpg',
                especie: 'Ave, macho',
                nome: 'Shazam',
                raca: '--',
                descricao: 'Dócil, assustado, também atende por titi, tem um corte pequeno na orelha.',
                local_visto: 'Rua Duartina no bairro monte sinai, proximo a escola Jesus me deu',
                contato: '92 00000 0122'
            },
              

            {
                foto: '../Images/shakira.jpeg',
                especie: 'Ave, fêmea',
                nome: 'Shakira',
                raca: '--',
                descricao: 'Penas brancas, amarelas e verde. Tem uma mancha verde na ponta do bico',
                local_visto: 'Aos arredores da rua Antonio Gonzaga alvorada 2',
                contato: '92 00000 0123'
            }
        ];   
        
        const array_animais = JSON.stringify(info_animais);
        localStorage.setItem('info_animais', array_animais);
    }
    localStorage.setItem("foiCarregadaUmaVez", true);

}