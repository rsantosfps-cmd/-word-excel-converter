/* ===========================================
   AVIATION CENTER SGC v0.4.0
=========================================== */

const paginas = document.querySelectorAll(".page");
const botoesMenu = document.querySelectorAll(".menu-item");

botoesMenu.forEach(botao => {

    botao.addEventListener("click", () => {

        botoesMenu.forEach(b=>b.classList.remove("active"));
        botao.classList.add("active");

        paginas.forEach(p=>p.classList.remove("active-page"));

        const pagina=document.getElementById(botao.dataset.page);

        if(pagina){

            pagina.classList.add("active-page");

        }

    });

});


/* ===========================================
   MODAL
=========================================== */

const modal=document.getElementById("modalInstrumento");

const btnNovo=document.getElementById("btnNovoInstrumento");

const fechar=document.getElementById("fecharModal");

const cancelar=document.getElementById("cancelarInstrumento");


if(btnNovo){

btnNovo.onclick=()=>{

modal.style.display="flex";

}

}

if(fechar){

fechar.onclick=()=>{

modal.style.display="none";

}

}

if(cancelar){

cancelar.onclick=()=>{

modal.style.display="none";

}

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}


/* ===========================================
   BANCO LOCAL
=========================================== */

let instrumentos=

JSON.parse(localStorage.getItem("instrumentos")) || [];


/* ===========================================
   SALVAR
=========================================== */

const btnSalvar=document.getElementById("salvarInstrumento");

if(btnSalvar){

btnSalvar.onclick=()=>{

const instrumento={

id:

document.getElementById("idInterno").value,

nome:

document.getElementById("nomeInstrumento").value,

fabricante:

document.getElementById("fabricante").value,

modelo:

document.getElementById("modeloInstrumento").value,

pn:

document.getElementById("partNumber").value,

sn:

document.getElementById("serialNumber").value,

prefixo:

document.getElementById("prefixoInstrumento").value,

cliente:

document.getElementById("clienteInstrumento").value,

ultima:

document.getElementById("ultimaCalibracao").value,

proxima:

document.getElementById("proximaCalibracao").value

};

instrumentos.push(instrumento);

localStorage.setItem(

"instrumentos",

JSON.stringify(instrumentos)

);

renderTabela();

limparFormulario();

modal.style.display="none";

}

}


/* ===========================================
   TABELA
=========================================== */

function renderTabela(){

const tbody=document.querySelector("#instrumentos tbody");

if(!tbody)return;

tbody.innerHTML="";

instrumentos.forEach((item,index)=>{

tbody.innerHTML+=`

<tr>

<td>${item.id}</td>

<td>${item.nome}</td>

<td>${item.pn}</td>

<td>${item.sn}</td>

<td>${item.fabricante}</td>

<td>${item.prefixo}</td>

<td>

<span class="status-ok">

Em dia

</span>

</td>

<td>

<button onclick="editar(${index})">

✏️

</button>

<button onclick="excluir(${index})">

🗑️

</button>

</td>

</tr>

`;

});

const total=document.getElementById("totalInstrumentos");

if(total){

total.innerHTML=instrumentos.length;

}

}


/* ===========================================
   EXCLUIR
=========================================== */

function excluir(index){

if(confirm("Excluir instrumento?")){

instrumentos.splice(index,1);

localStorage.setItem(

"instrumentos",

JSON.stringify(instrumentos)

);

renderTabela();

}

}


/* ===========================================
   EDITAR
=========================================== */

function editar(index){

const i=instrumentos[index];

document.getElementById("idInterno").value=i.id;
document.getElementById("nomeInstrumento").value=i.nome;
document.getElementById("fabricante").value=i.fabricante;
document.getElementById("modeloInstrumento").value=i.modelo;
document.getElementById("partNumber").value=i.pn;
document.getElementById("serialNumber").value=i.sn;
document.getElementById("prefixoInstrumento").value=i.prefixo;
document.getElementById("clienteInstrumento").value=i.cliente;
document.getElementById("ultimaCalibracao").value=i.ultima;
document.getElementById("proximaCalibracao").value=i.proxima;

instrumentos.splice(index,1);

localStorage.setItem(

"instrumentos",

JSON.stringify(instrumentos)

);

renderTabela();

modal.style.display="flex";

}


/* ===========================================
   LIMPAR
=========================================== */

function limparFormulario(){

document.querySelectorAll("#modalInstrumento input").forEach(campo=>{

campo.value="";

});

}


/* ===========================================
   INICIAR
=========================================== */

renderTabela();
