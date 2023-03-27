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

  if (nome !== "" && altura !== "" && peso !== "") {
    if(!altura || !peso) {
      const resultado = document.getElementById("resultado");
      resultado.textContent = "Complete demais campos";
      return;
    }
    const valorIMC = calcularIMC(peso, altura);
    const classificacao = classificarIMC(valorIMC);
    atualizarResultado(nome, valorIMC, classificacao);
  } else {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Preencha todos os campos";
  }
}

    

function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(1);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "abaixo do peso. Tá na hora de ganhar massa muscular!";
  } else if (imc < 25) {
    return "com um IMC dentro dos valores normais. Continua assim!";
  } else if (imc < 30) {
    return "um pouco acima do peso. Abre teu olho!";
  } else if (imc < 35) {
    return "com Obesidade grau I. Levanta do sofá e para de comer pastel de nata!";
  } else if (imc < 40) {
    return "com Obesidade grau II. Se liga!";
  } else {
    return "praticamente morto e não sabe";
  }
}

function atualizarResultado(nome, valorIMC, classificacao) {
  const resultado = document.getElementById("resultado");
  resultado.textContent = `${nome}, o valor do seu IMC é ${valorIMC} . Você está ${classificacao}`;
}


  

function cleanValuesIMC(){
  nome.value = ""
  altura.value = ""
  peso.value = ""
  resultado.textContent = ""
}

calcular.addEventListener("click", imc);

//eventos
limpar.addEventListener("click", (e) => {
  e.preventDefault();
  cleanValuesIMC();
})

