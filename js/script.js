document.addEventListener('DOMContentLoaded', function () {
    definirSaudacao();
    ativarTrocaDeImagem();
});

function definirSaudacao() {
    var el = document.getElementById('greeting');
    if (!el) return;

    var hora = new Date().getHours();
    var greeting;
    if (hora >= 5 && hora < 12) {
        greeting = 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }

    el.textContent = greeting + '! Tudo para o seu pet, em um só lugar.';
}
