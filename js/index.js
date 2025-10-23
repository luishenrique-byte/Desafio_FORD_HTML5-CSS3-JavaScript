
const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');
let vetorImg = [img1, img2, img3];

const label1 = document.querySelector('label[for="radio1"]');
const label2 = document.querySelector('label[for="radio2"]');
const label3 = document.querySelector('label[for="radio3"]');
let vetorLabels = [label1, label2, label3];

const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');
let vetorInputs = [radio1, radio2, radio3]

const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
const info3 = document.getElementById('info3');
let vetorInfo = [info1, info2, info3];

//Variável contador
let slideAtual = 1; // 1 pq o img[0] já está mostrando na tela

let intervalo;

// Garante que a primeira imagem esteja ativa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (vetorImg[0]) {
        vetorImg[0].classList.add('ativo');
        vetorLabels[0].classList.add('ativo');
        vetorInfo[0].classList.add('ativo');
    }
});


//Assim que o site carrega o intervalo inicia
document.addEventListener('DOMContentLoaded', startInteval);


function trocarSlide(radio) {
    let input = radio;

    //Remove 'ativo' de todas img
    vetorImg.forEach(element => {
        element.classList.remove('ativo');
    });

    // Remove 'ativo' de todos os labels
    vetorLabels.forEach(label => {
        label.classList.remove('ativo');
    });

    vetorInfo.forEach(info => {
        info.classList.remove('ativo');
    })

    // Adiciona a classe 'ativo' ao slide correspondente ao botão clicado
    if (input.id === 'radio1') {

        img1.classList.add('ativo');// <-- Adicionado
        label1.classList.add('ativo'); // <-- Adicionado
        info1.classList.add('ativo');

    } else if (input.id === 'radio2') {

        img2.classList.add('ativo');// <-- Adicionado
        label2.classList.add('ativo'); // <-- Adicionado
        info2.classList.add('ativo');

    } else if (input.id === 'radio3') {

        img3.classList.add('ativo');// <-- Adicionado
        label3.classList.add('ativo'); // <-- Adicionado
        info3.classList.add('ativo');

    }  
}


function trocarAuto(){

    //Armazena o input do slide
    let proximoSlide = vetorInputs[slideAtual];

    //Passa o input como parametro para o método
    trocarSlide(proximoSlide);

    // +1 no contador para próxima Img
    slideAtual++;
    
    // Garante que volte para a primeira Img
    if(slideAtual>=vetorImg.length){
        slideAtual=0
    }
}

function startInteval(){
    intervalo = setInterval(trocarAuto,2500);
}



/*TENTATIVA DE PASSAR O MOUSE E PARAR O INTERVALO*/
/*document.querySelector('.manual-buttom').addEventListener('mouseover', () =>{
    clearInterval(intervalo)
})

document.querySelector('.manual-buttom.ativo').addEventListener('mouseout', startInteval())*/