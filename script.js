/* HOME */
function home() {
  document.getElementById("conteudo").innerHTML = `
    <h2>Home</h2>
    <p>Página inicial do site.</p>
  `;
}

/* LOGIN */
function mostrarLogin() {
  document.getElementById("conteudo").innerHTML = `
    <h2>Login</h2>

    <form 
      action="https://api.sheetmonkey.io/form/5wxPJGqbP1u941WNXDWB8c"
      method="POST"
      onsubmit="salvarLogin(event)"
    >
      <label>Usuário:</label><br>
      <input type="text" name="usuario" id="usuario" required><br><br>

      <label>Senha:</label><br>
      <input type="password" name="senha" id="senha" required><br><br>

      <button type="submit">Entrar</button>
    </form>
  `;
}

/* SALVAR LOGIN */
function salvarLogin(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  localStorage.setItem("usuario", usuario);
  localStorage.setItem("senha", senha);

  event.target.submit();
}

/* DADOS */
function dados() {
  const usuario = localStorage.getItem("usuario");
  const senha = localStorage.getItem("senha");

  if (usuario && senha) {
    document.getElementById("conteudo").innerHTML = `
      <h2>Dados Salvos</h2>
      <p><strong>Usuário:</strong> ${usuario}</p>
      <p><strong>Senha:</strong> ${senha}</p>
    `;
  } else {
    document.getElementById("conteudo").innerHTML = `
      <h2>Dados</h2>
      <p>Nenhum dado salvo.</p>
    `;
  }
}

/* MOBILE */
function Mobile() {
  document.getElementById("conteudo").innerHTML = `
    <h2>Mobile</h2>
    <p>Essa é a página Mobile.</p>
    <p>Conteúdo específico para dispositivos móveis pode ser colocado aqui.</p>
  `;
}
