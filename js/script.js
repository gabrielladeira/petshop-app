document.addEventListener('DOMContentLoaded', function () {
    definirSaudacao();
    ativarTrocaDeImagem();
    configurarDataMinima();
    validarServicoAgendamento();
});

function definirSaudacao() {
    var el = document.getElementById('saudacao');
    if (!el) return;

    var hora = new Date().getHours();
    var saudacao;
    if (hora >= 5 && hora < 12) {
        saudacao = 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
        saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }

    el.textContent = saudacao + '! Tudo para o seu pet, em um só lugar.';
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
