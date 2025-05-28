const prompt = require('prompt-sync')();
const a = Number(prompt("Digite um número de 1 a 12"));

switch (a) {
    case 1: 
    case 12:
        console.log(`voce está de férias`);
        break;
    case 2:
        case 3:
            case 4:
                case 5:
                    case 6:
        console.log(`1 semestre letivo`);
        break;
    case 7:
        console.log(`voce está de recesso`);
        break;
        case 8:
            case 9:
                case 10:
                    case 11:
        console.log(`2 semestre letivo`);
        break;
        console.log(`1 semestre letivo`);
    default:
            console.log("Opção inválida!");
}