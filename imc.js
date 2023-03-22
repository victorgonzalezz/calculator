const calcular = document.getElementById("calcular");

function lettersOnly(input) {
  var regex = /[^a-z ]/gi;
  input.value = input.value.replace(regex, "");
}

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = +document.getElementById("altura").value;
  console.log(altura, "oi")
  const peso = +document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";
    
    if(valorIMC < 18.5){
      classificacao = "você está abaixo do peso."
    } else if( valorIMC < 25) {
      classificacao = "você está com um IMC dentro dos valores normais"
    } else if(valorIMC < 30) {
      classificacao = "atenção. Você está um pouco acima do peso"
    } else if(valorIMC < 35) {
      classificacao = "repense seu estilo de vida. Seu IMC indica uma obesidade grau I"
    } else if (valorIMC < 40) {
      classificacao = "se liga! Obesidade grau II"
    } else {
      classificacao = 'você já morreu e ainda não sabe'
    }

    resultado.textContent = `${nome}, o valor do seu IMC é ${valorIMC} Portanto, ${classificacao} `;

  } else {
    resultado.textContent = "Preencha todos os campos";
  }
}

calcular.addEventListener("click", imc);
