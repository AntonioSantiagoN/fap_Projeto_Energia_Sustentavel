const readline = require('readline-sync');

const energias = [];

function adicionarEnergia(tipo, local) {
  const novaEnergia = { tipo: tipo, local: local };
  energias.push(novaEnergia);
}

let opcao = 1;

while(opcao == 1) {

  const local = readline.question("Digite o nome da sua comunidade: ");
  const tipo = readline.question("Digite o tipo de energia: ");
  

  adicionarEnergia(tipo, local);
  console.log(energias);


  opcao = parseInt(readline.question("Digite 1 para continuar e 0 para sair: "), 10);
}

console.log("Finish");
