let constagem = prompt("informe tempo para contagem");
let contatdor = constagem;

while (contatdor > 0) {
  alert(`tempo para inicio em ${contatdor}`);
  contatdor--;
  if (contatdor == 0) {
    alert("tempo esgotado");
  }
}
