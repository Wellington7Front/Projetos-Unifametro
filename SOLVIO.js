// Garante que apenas um checkbox seja selecionado por vez
document.getElementById("maior").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("menor").checked = false;
  }
});

document.getElementById("menor").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("maior").checked = false;
  }
});

function login() {
  const maior = document.getElementById("maior").checked;
  const menor = document.getElementById("menor").checked;
  const senha = document.getElementById("senha2").value.trim();
  const senhaMestre = document.getElementById("senha_mestre").value.trim();

  const senhaCorreta = "1234";         // Senha comum
  const senhaMestreCorreta = "777";    // Senha mestre

  // Verifica se todos os campos foram preenchidos
  if ((!maior && !menor) || senha === "" || senhaMestre === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

   //Verifica se a senha mestre esta correta
   

  // Verifica se a senha mestre está correta
  if (senhaMestre === senhaMestreCorreta) {
    window.location.href = "pag3.html";
    return;
  }

  // Verifica a senha comum
  if (senha === senhaCorreta) {
    if (maior) {
      window.location.href = "pag3.html";
    } 
  
  }
  if (senha === senhaMestreCorreta){
    if (menor) {
      
    }
  }
  else {
    alert("Senha Mestre incorreta.");
  }
}
