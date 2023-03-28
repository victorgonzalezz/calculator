const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");
const alerta = document.getElementById("result-container");

//lógica para não permitir a letra "e" e d
function lettersOnly(input) {
  var regex = /[^a-zç\s~^´]/gi;
  var normalizedValue = unorm.nfd(input.value).replace(/[\u0300-\u036f]/g, "");
  input.value = normalizedValue.replace(regex, "");
}
function imc() {
  const nome = document.getElementById("nome").value;
  const altura_cm = +document.getElementById("altura").value;
  const peso = +document.getElementById("peso").value;
  console.log(nome, "oi")


  if (nome !== "" && altura_cm !== "" && peso !== "") {
    if (!altura_cm || !peso) {
      const resultado = document.getElementById("resultado");
      resultado.textContent = "Complete demais campos";
      return;
    }
    const valorIMC = calcularIMC(peso, altura_cm);
    const classificacao = classificarIMC(valorIMC);
    atualizarResultado(nome, valorIMC, classificacao);
  } else {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Preencha todos os campos";
  }
}

alerta.addEventListener("result", imc);

function calcularIMC(peso, altura_cm) {
  let altura_m = altura_cm / 100; // converter de cm para m
  return (peso / (altura_m * altura_m)).toFixed(2);
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
  resultado.textContent = `${nome}, o valor do seu IMC é ${valorIMC} .Você está ${classificacao}`;
}

function cleanValuesIMC() {
  nome.value = "";
  altura_cm.value = "";
  peso.value = "";
  resultado.textContent = "";
}

calcular.addEventListener("click", imc);

//eventos
limpar.addEventListener("click", (e) => {
  e.preventDefault();
  cleanValuesIMC();
});

function exibirAlerta() {
  let alerta = document.getElementById("result-container");
  alerta.classList.remove("hide");

  let audioElement = document.getElementById("myAudio");
  audioElement.play();

  limpar.addEventListener("click", function () {
    document.getElementById("result-container").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("result-container").classList.add("hide");
    audioElement.pause();
  });
}

calcular.addEventListener("click", function () {
  let peso = document.getElementById("peso");
  let altura_cm = document.getElementById("altura");

  let imc = calcularIMC(peso.value, altura_cm.value);
  classificarIMC(imc);

  if (imc < 40) {
    document.getElementById("result-container").classList.add("hide");
  } else {
    exibirAlerta();
  }
});
