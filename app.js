/* ===================================================
   AVIATION CENTER SGC
   app.js - Sprint 2
=================================================== */

console.clear();

console.log("======================================");
console.log(" Aviation Center SGC v0.2");
console.log(" Sistema iniciado com sucesso.");
console.log("======================================");

// Aguarda carregar toda a página
document.addEventListener("DOMContentLoaded", () => {

    iniciarSistema();

});

// =============================
// Inicialização
// =============================

function iniciarSistema(){

    mostrarTela("dashboard");

    atualizarDataHora();

    setInterval(atualizarDataHora,1000);

}

// =============================
// Navegação
// =============================

function mostrarTela(id){

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(pagina=>{

        pagina.classList.add("oculto");

    });

    document.getElementById(id).classList.remove("oculto");

    atualizarMenu(id);

}

// =============================
// Menu
// =============================

function atualizarMenu(id){

    const menus = document.querySelectorAll(".menu");

    menus.forEach(menu=>{

        menu.classList.remove("active");

    });

    if(id==="dashboard"){

        menus[0].classList.add("active");

    }

    if(id==="instrumentos"){

        menus[1].classList.add("active");

    }

}

// =============================
// Relógio
// =============================

function atualizarDataHora(){

    let agora = new Date();

    let data =
        agora.toLocaleDateString("pt-BR");

    let hora =
        agora.toLocaleTimeString("pt-BR");

    let elemento =
        document.getElementById("dataHora");

    if(elemento){

        elemento.innerHTML =
        data + " | " + hora;

    }

}

// =============================
// Pesquisa
// =============================

const pesquisa =
document.getElementById("pesquisa");

if(pesquisa){

pesquisa.addEventListener("keyup",function(){

let filtro=this.value.toUpperCase();

let tabela=
document.querySelectorAll("#instrumentos table tbody tr");

tabela.forEach(function(linha){

let texto=
linha.innerText.toUpperCase();

if(texto.indexOf(filtro)>-1){

linha.style.display="";

}else{

linha.style.display="none";

}

});

});

}

// =============================
// Botão Novo Instrumento
// =============================

function novoInstrumento(){

alert("Cadastro de Instrumentos\n\nSprint 3");

}

// =============================
// Abrir Instrumento
// =============================

function abrirInstrumento(id){

alert("Abrindo instrumento:\n\n"+id);

}

// =============================
// Dashboard
// =============================

function atualizarDashboard(){

console.log("Dashboard atualizado.");

}

// =============================
// Histórico
// =============================

function abrirHistorico(){

alert("Histórico\n\nEm desenvolvimento.");

}

// =============================
// Auditoria
// =============================

function abrirAuditoria(){

alert("Auditoria\n\nEm desenvolvimento.");

}

// =============================
// Sessões
// =============================

function abrirSessao(){

alert("Sessões\n\nSprint 4");

}

// =============================
// Configurações
// =============================

function abrirConfiguracoes(){

alert("Configurações");

}
