// ======================================================
// AVIATION CENTER SGC
// app.js - Versão 0.1 Alpha
// ======================================================

console.log("Aviation Center SGC iniciado com sucesso!");

// Dados do Dashboard
const dashboard = {
    calibracoesHoje: 8,
    sessoesAtivas: 2,
    instrumentos: 314,
    alertas: 3
};

// Exibe mensagem ao iniciar
window.onload = function () {
    console.log("Sistema carregado.");

    alert(
        "Bem-vindo ao Aviation Center SGC!\n\n" +
        "Versão 0.1 Alpha\n\n" +
        "O sistema foi iniciado com sucesso."
    );
};

// Funções que usaremos nas próximas versões

function abrirDashboard() {
    alert("Dashboard");
}

function abrirInstrumentos() {
    alert("Módulo Instrumentos (em desenvolvimento)");
}

function abrirSessoes() {
    alert("Módulo Sessões (em desenvolvimento)");
}

function abrirHistorico() {
    alert("Módulo Histórico (em desenvolvimento)");
}

function abrirAuditoria() {
    alert("Módulo Auditoria (em desenvolvimento)");
}

function abrirConfiguracoes() {
    alert("Configurações");
}