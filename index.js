// Objetivo 1 - quando o usuário clicar  no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML

    // Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele.

    //Passo 2 - identificar o clique no botão

    //Passo 3 - adicionar classe ativo nos projetos escondidos

// Objetivo 2 - esconder o botão de mostrar mais
    
    //Passo 1 - pegar o botão e esconder

//--------------------------------------------//


 const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projeto');
 const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
 
 botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
};

function mostrarMaisProjetos() {
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add('ativo');
    });
};

