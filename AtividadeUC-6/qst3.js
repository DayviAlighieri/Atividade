const prompt = require('prompt-sync')();
let voto;
let jose = 0
let maria = 0
let joao = 0
let branco = 0
let nulo = 0
let total = 0
do {
    console.log(
        `----------Asa Branca --------
Código |     Votação     | 
1      |      José       | 
2      |      Maria      | 
3      |      João       | 
4      | Voto em branco  |
5      | Voto nulo       | 
-----------------------------
`);
    voto = Number(prompt("Informe Em quem Deseja votar: "));
    switch (voto) {
        case 0:
            console.log(`Encerrando votação`)

            break;
        case 1:
            jose++
            console.log(`José possui ${jose} votos`)
            break;
        case 2:
            maria++
            console.log(`Maria possui ${maria} votos`)
            break;
        case 3:
            joao++
            console.log(`joao possui ${joao} votos`)
            break;
        case 4:
            branco++
            console.log(`O senhor votou em Branco ${branco} vezes`)
            break;
        case 5:
            nulo++
            console.log(`O senhor votou em Nulo ${nulo} vezes`)
            break;

        default:
            console.log("opção inválida")
    }
} while (voto !== 0)

if (maria > joao && jose) {
    console.log(`maria venceu com ${maria}`)
} else if (joao > maria && jose) {

    console.log(`joao venceu com ${joao}`)

} else if (jose > maria && joao) {
    console.log(`jose venceu com ${jose}`)
} else if (jose == maria || jose == joao || maria == jose) {
    console.log("Deu empate")
} else {
    console.log("havera segundo turno")
}
console.log($)
