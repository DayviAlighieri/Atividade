const prompt = require('prompt-sync')();
let pedido, quantidade, total = 0;
do {
    console.log(
        `Empresa Funcionário Feliz --------
Digite a opção desejada:
1 - Cálculo de imposto
2 - Cálculo de aumento salarial
3 - Verificar situação do funcionário
4 - Sair `);