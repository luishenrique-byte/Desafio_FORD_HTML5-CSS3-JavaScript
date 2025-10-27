let vetorCarro = []
const infos = ['image', 'modelo', 'alturaCacamba', 'alturaVeiculo', 'alturaSolo', 'capacidadeCarga', 'motor', 'potencia', 'volumeCacamba', 'roda','preco'];

class Carro {

    constructor(image, modelo, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, preco){
        this.image = image
        this.modelo = modelo
        this.alturaCacamba = alturaCacamba
        this.alturaVeiculo = alturaVeiculo
        this.alturaSolo = alturaSolo
        this.capacidadeCarga = capacidadeCarga
        this.motor = motor
        this.potencia = potencia
        this.volumeCacamba = volumeCacamba
        this.roda = roda
        this.preco = preco
    }

}

function capturarPosicaoVetor(vetor, Carro) {
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i]===Carro){
            return i
        }    
    }
}

function inserirCarroVetor(input, carro){

    let nomeClasse = input.className;

    switch (nomeClasse) {
        case 'checkbox':
            if (carro instanceof Carro){

                let i = capturarPosicaoVetor(vetorCarro, Carro);
        
                if(input.checked){
        
                    vetorCarro.push(carro); // Adiciona quando marcador
                    return vetorCarro[i]
                } else {
        
                    vetorCarro.splice(i,1) // Remove ao desmarcar
        
                }
        
            } else {
                throw "You need set a Car Class";
            }
            break;
    
        case 'info_button':
            
            vetorCarro.push(carro)
            
            break;
    }
    
}

function mostrarTabela(input){

    nomeClasse = input.className;

    switch (nomeClasse) {
        case 'comparar-button':
            if (vetorCarro.length<2){
                alert("Precisa marcar 2 carros para apresentar a comparação");
                return;
            } else if (vetorCarro.length>2){
                alert("Só pode marcar 2 carros para apresentar a comparação");
                return;
            }
            updateDadosTabela(nomeClasse);
            document.getElementById('comparacao').style.display = "block";
            break;
    
        case 'info_button':
            
            updateDadosTabela(nomeClasse);
            document.getElementById('informacao').style.display = "block";
            break;
    }
}

function ocultarTabela(input){

    let nomeClasse = input.className;

    switch (nomeClasse) {
        case 'buttonClose_comparacao':
            document.getElementById('comparacao').style.display = "none";
            break;
    
        case 'buttonClose_info':
            vetorCarro.length = 0; //Limpar o vetor assim que retirar as informações da tela
            document.getElementById('informacao').style.display = "none";
            break;
    }
}

function updateDadosTabela(nomeClasse){

    let idSelect;

    vetorCarro.forEach((carro, i) => {
        
        infos.forEach((info) => {
            
            //verificar se o usuário quer comparar ou ver as informações
            if(nomeClasse==='comparar-button'){

                idSelect = document.getElementById(`compare_${info}_${i}`)

            } else if(nomeClasse==='info_button'){

                idSelect = document.getElementById(`compare_${info}`)

            }
    
            if (!idSelect) return; // evita erro se o ID não existir
    
            if(info == 'image'){

                idSelect.innerHTML = `<img src="${carro[info]}" alt="Foto do carro" width="150">`;

            } else {
                
                idSelect.textContent = carro[info];

            }
        })
    })
}