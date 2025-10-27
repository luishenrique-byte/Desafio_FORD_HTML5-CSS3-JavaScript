//class contato
let contatoArr = []
let form = ['nome', 'email', 'telefone', 'contato']
class contato {

    constructor(nome, email, telefone, contato, mensagem) {

        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.contato = contato
        this.mensagem = mensagem

    }
}

function Post(form) {

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("mensagem").value,
        form.elements.namedItem("contato").value);

    let verificacao = document.getElementById("lgpd_input");

    if (verificacao.checked) {
        contatoArr.push(data);
        Enviar();
    } else {
        alert('É necessário que concorde com nossos termo para se cadastrar!')
    }

    return false;
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    MostrarArray();
}

function MostrarArray() {
    console.log('**********INICIO DO DATABASE***********')
    contatoArr.forEach(contato => {
        console.log('***********************************')
        form.forEach(informacao => {
            console.log(contato[informacao])
        });
    });
}