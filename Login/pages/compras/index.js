
function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "../../login.html"
    }).catch(()=> {
        alert("Erro ao fazer logout")
    })
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------

function criarBotoesMenu(departamento) {
    const menu = document.querySelector(".menu");

    const botoesArray = Object.values(departamento.botoes);

    botoesArray.forEach(botao => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.id = botao.id;
        a.textContent = botao.nome;

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
    const departamento = "compras"; //**Lembrar de modificar o departamento
    const departamentosRef = firebase.firestore().collection('Departamentos');

    departamentosRef.doc(departamento)
        .get()
        .then(doc => {
            if (doc.exists) {
                const departamentoData = doc.data();
                console.log(departamentoData)
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

//----------------------------------------------------------------------------------------------------------------------------------------------------------

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
