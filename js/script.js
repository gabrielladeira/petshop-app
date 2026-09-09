document.addEventListener('DOMContentLoaded', function () {
    definirSaudacao();
    ativarTrocaDeImagem();
    configurarDataMinima();
    validarServicoAgendamento();
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

function ativarTrocaDeImagem() {
    var imagens = document.querySelectorAll('img[data-hover-src]');
    imagens.forEach(function (img) {
        var srcOriginal = img.getAttribute('src');
        var srcHover = img.getAttribute('data-hover-src');

        img.addEventListener('mouseenter', function () {
            img.setAttribute('src', srcHover);
        });
        img.addEventListener('mouseleave', function () {
            img.setAttribute('src', srcOriginal);
        });
    });
}

function configurarDataMinima() {
    var campoData = document.getElementById('dataAgendamento');
    if (!campoData) return;

    var hoje = new Date().toISOString().split('T')[0];
    campoData.setAttribute('min', hoje);
}

function validarServicoAgendamento() {
    var banho = document.getElementById('servicoBanho');
    var tosa = document.getElementById('servicoTosa');
    if (!banho || !tosa) return;

    function atualizarValidade() {
        var mensagem = (banho.checked || tosa.checked) ? '' : 'Selecione ao menos um serviço.';
        banho.setCustomValidity(mensagem);
        tosa.setCustomValidity(mensagem);
    }

    banho.addEventListener('change', atualizarValidade);
    tosa.addEventListener('change', atualizarValidade);
    atualizarValidade();
}
