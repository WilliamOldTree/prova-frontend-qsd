const $senha = document.getElementById("senha");
const $confirmarsenha = document.getElementById("confirmarsenha");
const $form = document.getElementById("form");

$form.addEventListener("submit", event => {
    if ($senha.value !== $confirmarsenha.value) {
        event.preventDefault();
        alert("As senhas não estão iguais");
    }
});