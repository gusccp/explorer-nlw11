const form = document.querySelector("#form-habits");
const config = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change",save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5);
  const dayExists = config.dayExists(today); //Valida se a data da variavel TODAY já não existe. Se Existir, ficará TRUE e ira criar uma nova, do contrario, fica FALSE e vai para o IF validar //

  if (dayExists) {
    alert("Data já foi adicionada ❌");
    return;
  }

  alert("Data adicionada com sucesso ☑");
  config.addDay(today); //Adiciona o dia caso não exista//
}

//Salva alterações (Cache) feitas na tela //
function save(){
  localStorage.setItem('Habitos', JSON.stringify(config.data));
  }

// var nome = prompt("Digite seu nome!");
// var nomeNovo = nome + 2;

// alert(nomeNovo);

// const data = {
//   run: ['03-24','03-25','03-26','03-27','02-17','02-18'],
//   water: ['02-13','02-14','02-15','02-16','02-17','02-18'],
//   food: ['02-13','02-14','02-15','02-16','02-17','02-18'],
//   football: ['02-13','02-14','02-15','02-16','02-17','02-18']
// }

const data = JSON.parse(localStorage.getItem('Habitos')) || {}

config.setData(data);

config.load();
config.renderLayout();
