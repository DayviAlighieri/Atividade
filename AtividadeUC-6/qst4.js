const prompt = require("prompt-sync")();
let imposto, aumento, situacao ;
do {
  console.log(
    `Empresa Funcionário Feliz --------
         Digite a opção desejada:
1 -      Cálculo de imposto
2 -      Cálculo de aumento salarial
3 -      Verificar situação do funcionário
4 -      Sair `
  );
  pedido = Number(prompt("Informe um número de 1 a 3 e 4 para encerrar: "));

  switch (pedido) {
    case 1:
      imposto = Number(
        prompt(
          "Certo! Agora Informe um valor menor que 500R$ e maior que 850R$: "
        )
      );
      if (imposto < 500) {
        imposto = (imposto * 5) / 100;
        console.log(`Imposto a pagar é ${imposto}`);
      } else if (imposto >= 500 && imposto <= 850) {
        imposto = (imposto * 10) / 100;
        console.log(`Imposto a pagar é ${imposto}`);
      } else if (imposto > 851) imposto = (imposto * 15) / 100;
      {
        console.log(`Imposto a pagar é ${imposto}`);
      }
      break;
    case 2:
      aumento = Number(
        prompt(
          "Certo! Agora Informe um valor menor que 450R$ e maior que 1500R$: "
        )
      );
      if (aumento < 450) {
        aumento = aumento + 100;
        console.log(`Seu salário agora passou a ser ${aumento}`);
      } else if (aumento >= 450 && aumento <= 750) {
        aumento = aumento + 75;
        console.log(`Seu salário agora passou a ser ${aumento}`);
      } else if (aumento >= 751 && aumento <= 1500) {
        aumento = aumento + 50;
        console.log(`Seu salário agora passou a ser ${aumento}`);
      } else if (aumento > 1501) {
        aumento = aumento + 25;
        console.log(`Seu salário agora passou a ser ${aumento}`);
      }
      break;

    case 3:
      situacao = Number(
        prompt(
          "Certo! Agora Informe um valor menor que 700R$ e maior que 701R$: "
        )
      );
      if (situacao < 700) {
        console.log("Voce é mal remunerado");
      } else if (situacao > 701) {
        console.log("voce é bem remunerado");
      }
      break;
    case 4:
      console.log("voce encerrou o processo!");
      break;
  }
} while (pedido !== 4);
