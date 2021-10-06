let peso = 99.5;

if(peso > 99) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!")
} else {
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo")
}

let listaPecas = ["Disco de Freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Correia", "Ignição", "Carter"]

let numeroPecas = listaPecas.length;

if (listaPecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças.")
} else {
    console.log("Não há espaço disponível na lista.")
}

let nomePeca = listaPecas[0];

if(nomePeca.length >3) {
    console.log("Nome de peça é valido, pode seguir com o cadastro");
} else {
    console.log("nome de peça inválido, o nome deve ter mais de 3 caracteres")
}