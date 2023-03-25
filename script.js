// seleciona todos os lembretes
const lembretes = document.querySelectorAll('.lembrete');

// seleciona o modal e seu conteúdo
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');

// adiciona um evento de clique a cada lembrete
lembretes.forEach(lembrete => {
  lembrete.addEventListener('click', () => {
    // o título e a descrição do lembrete clicado
    const titulo = lembrete.querySelector('h2').textContent;
    const descricao = lembrete.querySelector('p').textContent;

    // preenche o conteúdo do modal com o título e descrição do lembrete clicado
    modalContent.querySelector('#modal-title').textContent = titulo;
    modalContent.querySelector('#modal-description').textContent = descricao;

    // exibe o modal
    modal.style.display = 'block';
  });
});

// adiciona um evento de clique ao botão de fechar do modal
const closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', () => {
  // esconde o modal
  modal.style.display = 'none';
});

// fecha o modal quando o usuário clicar fora da caixa do modal
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
  const btn = document.querySelector('.ver-detalhes-btn');
const modal = document.querySelector('.modal');

btn.addEventListener('click', () => {
  modal.classList.add('show');
});

});
