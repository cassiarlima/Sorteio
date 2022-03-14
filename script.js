var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou, mestre das adivinhações!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você precisa digitar um número de 0 à 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "O número é maior do que você digitou";
  } else {
    elementoResultado.innerHTML =
      "Errou, o número correto era " + numeroSecreto;
  }
}
