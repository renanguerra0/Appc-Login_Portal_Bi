
function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "../../login.html"
    }).catch(()=> {
        alert("Erro ao fazer logout")
    })
}

//----------------------------------------------------------------------------

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
    const departamento = "comercial-atacado";
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

//----------------------------------------------------------------------------

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