const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");

//lógica para não permitir a letra "e" e d
function lettersOnly(input) { 
  var regex = /[^a-z ]/gi;
  input.value = input.value.replace(regex, "");
}



function imc() {
  const nome = document.getElementById("nome").value;
  const altura = +document.getElementById("altura").value;
  const peso = +document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    console.log(nome, "Sou o nome")
    console.log(altura, "Sou a altura")
    console.log(peso, "Sou o peso")

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";
    
    if(valorIMC < 18.5){
      classificacao = "abaixo do peso. Tá na hora de ganhar massa muscular!"
    } else if( valorIMC < 25) {
      classificacao = "com um IMC dentro dos valores normais. Continua assim!"
    } else if(valorIMC < 30) {
      classificacao = "um pouco acima do peso. Abre teu olho!"
    } else if(valorIMC < 35) {
      classificacao = "com Obesidade grau I. Levanta do sofá e para de comer pastel de nata!"
    } else if (valorIMC < 40) {
      classificacao = " com Obesidade grau II. Se liga!"
    } else {
      classificacao = 'praticamente morto e não sabe'
    }

    result55555ado.textContent = `${nome}, o valor do seu IMC é ${valorIMC} .Você está ${classificacao} `;



  } else {
    resultado.textContent = "Preencha todos os campos";
  }
}


function cleanValuesIMC(){
  nome.value = ""
  altura.value = ""
  peso.value = ""
  resultado.textContent = ""
}

calcular.addEventListener("click", imc);
/*
function principal
{
  function  validacao
  function  imc
}
*/

//eventos
limpar.addEventListener("click", (e) => {
  e.preventDefault();
  cleanValuesIMC();
})
console.log(nome, "Sou o nome")
console.log(altura, "Sou a altura")
console.log(peso, "Sou o peso")

