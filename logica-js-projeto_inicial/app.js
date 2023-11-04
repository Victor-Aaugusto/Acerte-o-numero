alert("Bem vindo ao jogo do numero secreto");

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tentativas = 0;
console.log(numeroSecreto);
while (chute != numeroSecreto) {
  chute = prompt(`Informe um, número de 01 a ${numeroMaximo}`);
  tentativas++;
  if (numeroSecreto == chute) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que chute: ${chute}`);
    } else {
      alert(`O numero secreto é maior que chute: ${chute}`);
    }
  }
}

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Parabens, você acertou o numero secreto: ${numeroSecreto} em ${tentativas} ${palavraTentativas}`
);
