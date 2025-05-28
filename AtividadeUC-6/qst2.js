const prompt = require('prompt-sync')();
let pedido, quantidade, total = 0;
do {
    console.log(
        `------------------CARDÁPIO ------------------
Código | Produto         | Preço(R$)
1      | Refrigerante    | 1.50
2      | Cachorro quente | 1.00
3      | Bauru           | 1.30
4      | Hamburguer      | 1.40
5      | Cheeseburguer   | 1.20
----------------------------------------------
`);
    pedido = Number(prompt("Informe um número de 1 a 5 e 0 para encerrar: "));
    switch (pedido) {
        case 0:
            console.log(`total a pagar é igual a ${total.toFixed(2)}`)
break;
        case 1:
            quantidade = Number(prompt("Certo! Agora informe a quantidade: "));
            total += quantidade * 1.50
            break;

        case 2:
            quantidade = Number(prompt("Certo! Agora informe a quantidade: "));
            total += quantidade * 1.00
            break;
        case 3:
            quantidade = Number(prompt("Certo! Agora informe a quantidade: "));
            total += quantidade * 1.30
            break;
        case 4:
            quantidade = Number(prompt("Certo! Agora informe a quantidade: "));
            total += quantidade * 1.40
            break;
        case 5:
            quantidade = Number(prompt("Certo! Agora informe a quantidade: "));
            total += quantidade * 1.20
            break;
        default:
            console.log("opção inválida");
    }
} while (pedido !== 0);