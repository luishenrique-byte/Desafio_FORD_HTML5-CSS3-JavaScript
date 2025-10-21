
const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');

let vetorImg = [img1, img2, img3];

// Garante que a primeira imagem esteja ativa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (vetorImg[0]) {
        vetorImg[0].classList.add('ativo');
    }
});

function trocarSlide(bolinha) {
    let input = bolinha;

    vetorImg.forEach(element => {
        element.classList.remove('ativo');
    });

    // Adiciona a classe 'ativo' ao slide correspondente ao botão clicado
    if (input.id === 'radio1') {
        img1.classList.add('ativo');
    } else if (input.id === 'radio2') {
        img2.classList.add('ativo');
    } else if (input.id === 'radio3') {
        img3.classList.add('ativo');
    }
}