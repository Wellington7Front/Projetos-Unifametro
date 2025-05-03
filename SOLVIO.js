function login() {

    
  const senha1 = document.getElementById('senha1').value;
  const senha2 = document.getElementById('senha2').value;
  const senha_mestre = document.getElementById('senha_mestre').value;
  

  // Avaliação direta no if:

  if (
    (senha1 === '123' && senha2 === '321') ||
    senha_mestre === '777') 
    { 
    alert("✅ Acesso concedido!");
    window.location.href = 'pag3.html'; //
} 
 else {

  alert("❌ Acesso negado!");
 }
}



