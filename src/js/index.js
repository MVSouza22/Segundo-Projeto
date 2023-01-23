/* 

OBJETIVO !- Clicar no botão de ver trailer, devemos abrir a modal com o video

- passo 1- dar um jeito de pegar o elemneto que representa o botao na tela usando o JS 
- passo 2- dar um jeito de identifacar quando clicar no botao
- passo 3- pegar o elemento da modal no js
- passo 4 - abrir a modal na tela

OBJETIVO 2- Quando clicar no X devemos fechar a modal

- passo 1-  dar um jeito de pegar o leemento de fechar a modal usando js
- paasso 2- dar um jeito de identifcar quando clicar no X
- passo 3- fechar a modal

*/

console.log('mostrar o document', document);

const botaoJogo = document.querySelector(".botao-jogo");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const LinkDoVideo = video.src;

function alternaModal(){
    modal.classList.toggle("aberto");
}
botaoJogo.addEventListener("click", () => {
    alternaModal()
        video.setAttribute("src", LinkDoVideo);
    });

fecharModal.addEventListener("click", () => {
    alternaModal()
    video.setAttribute("src", "")
});

