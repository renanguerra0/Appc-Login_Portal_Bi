firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "../../login.html";
    } else {
        verificarPermissoes(user);
    }
});

//Verificando se o usuário pode permanecer naquela página
function verificarPermissoes(user) {
    const departamento = "comercial-varejo";
    const autorizacoesRef = firebase.firestore().collection('autorizacoes');

    autorizacoesRef.doc(user.uid)
        .get()
        .then(doc => {
            if (doc.exists) {
                const autorizacao = doc.data();
                const departamentosAutorizados = Object.values(autorizacao.departamento);

                if (!departamentosAutorizados.includes(departamento)) {
                    window.location.href = "../../login.html";
                }
            } else {
                window.location.href = "../../login.html";
            }
        })
        .catch(error => {
            console.error('Erro ao verificar permissões:', error);
            window.location.href = "../../login.html";
        });
}



//---------------------------------------------------------------------------------
function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "../../login.html"
    }).catch(()=> {
        alert("Erro ao fazer logout")
    })
}

//-----------------------------------------------------------------------------

function criarBotoesMenu(departamento) {
    const menu = document.querySelector(".menu");

    const botoesArray = Object.values(departamento.botoes);

    botoesArray.forEach(botao => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.id = botao.id;
        a.textContent = botao.nome;
        li.className = "glow-on-hover";

        a.addEventListener("click", function () {
            exibirDashboard(botao.dashboardId);
        });

        li.appendChild(a);
        menu.appendChild(li);
    });
}

function exibirDashboard(dashboardId) {
    const div = document.querySelector("#content");
    div.innerHTML = `${dashboardId}`;
}


function buscarDepartamento() {
    const departamento = "comercial-varejo"; //**Lembrar de modificar o departamento
    const departamentosRef = firebase.firestore().collection('Departamentos');

    departamentosRef.doc(departamento)
        .get()
        .then(doc => {
            if (doc.exists) {
                const departamentoData = doc.data();
                criarBotoesMenu(departamentoData);
            } else {
                console.error('Documento de departamento não encontrado.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar departamento:', error);
        });
}

buscarDepartamento();

//-----------------------------------------------------------------------------

/*Mostrar e ocultar a barra*/
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

/* Mostrar e ocultar texto */
let mensagem = document.querySelector(".mensagem") ;

//Mostrar a mensagem
function showMessage(){   
   mensagem.style.display = "block";   
 }
//Esconder a mensagem
function hideMessage(){
  mensagem.style.display = "none"; 
}


/*Loop para buscar as imagens na pasta*/
/*
for(var i = 0; i < 10; i++){    
    var img = document.createElement("img"); //Criar elemento img
    img.src = "../../10. Dataflow/1. Departamentos/RecursosHumanos/Comunicados/" + i + ".png"; //Atribuindo a propriedade source da imagem  
    img.width = "400";

    img.onerror = function() {
        console.log("Erro: A imagem " + this.src + " não foi encontrada."); //Verificando
        this.style.display = "none"; //Caso não encontre a imagem, ocultar o erro. 
    };
        document.getElementById("content").appendChild(img); //Adicionando imagem como filha de content e exibindo na tela
}
*/

//Método antigo para acrescentar funcionalidade aos botões já criados.
/* 
let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");

link1.addEventListener("click", function(){

    let div = document.querySelector("#content");
    console.log(div);

    div.innerHTML = '<iframe title="015.2 Inadimplencia por Polo" width="1400" height="700" src="https://app.powerbi.com/reportEmbed?reportId=fce4842b-24f1-4429-8f6e-506eaab2243d&navContentPaneEnabled=false&autoAuth=true&ctid=f5c1c89d-9a3a-480b-b011-2d2c3d6ce25d" frameborder="0" allowFullScreen="true"></iframe>'
});


link2.addEventListener("click", function(){

    let div = document.querySelector("#content");
    console.log(div);

    div.innerHTML = '<iframe title="034 Vendas-gerentes" width="1400" height="700" src="https://app.powerbi.com/reportEmbed?reportId=b3471f8c-8adb-4a05-b207-85b4af37ed5e&navContentPaneEnabled=false&autoAuth=true&ctid=f5c1c89d-9a3a-480b-b011-2d2c3d6ce25d" frameborder="0" allowFullScreen="true"></iframe>'
});
*/