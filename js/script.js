document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.querySelector('.tema-btn');
  const contrastBtn = document.querySelector('.contraste-btn');
  const form = document.getElementById('contatoForm');
  const alerta = document.getElementById('alerta');
  const somSucesso = document.getElementById('somSucesso');
  const somErro = document.getElementById('somErro');

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });

  function mostrarMensagem(texto, tipo) {
    alerta.textContent = texto;
    alerta.className = `mensagem mostrar ${tipo}`;
    if (tipo === 'sucesso') somSucesso.play();
    if (tipo === 'erro') somErro.play();
    setTimeout(() => alerta.classList.remove('mostrar'), 2500);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || mensagem === '') {
      mostrarMensagem('⚠️ Preencha todos os campos antes de enviar!', 'erro');
      return;
    }

    mostrarMensagem('✔️ Mensagem enviada com sucesso!', 'sucesso');
    form.reset();
  });
});