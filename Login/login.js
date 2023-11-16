
let paginaSelecionada = "";
let selectedValue;
const departamentoSelect = document.getElementById("departamento");

departamentoSelect.addEventListener("change", function() {
    selectedValue = departamentoSelect.value;

    // Chama uma função que depende de selectedValue
    handleSelectedValue(selectedValue);
});

function handleSelectedValue(value) {
    switch (value) {
        case 'comercial-varejo':
            paginaSelecionada = "pages/comercial-varejo/index.html";
            break;
        case 'comercial-atacado':
            paginaSelecionada = "pages/comercial-atacado/index.html";
            break;
        case 'compras':
            paginaSelecionada = "pages/compras/index.html";
            break;
        case 'cobranca':
            paginaSelecionada = 'pages/cobranca/index.html';
            break;
        default:
            console.log("Opção inválida");
            paginaSelecionada = "";
            break;
    }
}


/*Passando o resultado das funções*/ 
function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}

/*Passando o resultado das funções*/ 
function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErrors();
}


function acessar() {
    const email = form.email().value;
    const senha = form.senha().value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(response => {
            const user = response.user;

            // Verifique as permissões associadas ao usuário e departamento selecionado
            verificarPermissoes(user, paginaSelecionada);
        })
        .catch(error => {
            alert(getErrorMessage(error));
        });
}

function verificarPermissoes(user, paginaSelecionada) {
    const departamento = form.departamento().value;

    // Consulte o Firestore para verificar as permissões
    const autorizacoesRef = firebase.firestore().collection('autorizacoes');

    autorizacoesRef.doc(user.uid)  // Buscando o doc para obter um documento específico
        .get()
        .then(doc => {
            if (doc.exists) {
                const autorizacao = doc.data();
                if (autorizacao.departamento === departamento) {
                    // Caso o usuário tenha permissão, direcionar para a próxima página.
                    window.location.href = paginaSelecionada;
                } else {
                    alert('Usuário não tem permissão para acessar esta página.');
                }
            } else {
                alert('Documento de autorização não encontrado para o usuário.');
            }
        })
        .catch(error => {
            console.error('Erro ao verificar permissões:', error);
            alert('Erro ao verificar permissões. Tente novamente mais tarde.');
        });
}

function getErrorMessage(error){
    if(error.code == "auth/invalid-login-credentials"){
        return "Usuário não encontrado, tente novamente.";
    }
    return error.message;
}

/*Verificando se o email é válido*/
function isEmailValid(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

/*Mostrar ou esconder erro email*/
function toggleEmailErrors(){
    const email = form.email().value;
    form.emailObrigatorio().style.display = email ? "none" : "block";
    form.emailInvalido().style.display = validateEmail(email) ? "none" : "block";
}


/*Mostrar ou esconder erro senha*/
function togglePasswordErrors(){
    const senha = form.senha().value;
    form.senhaObrigatoria().style.display = senha ? "none" : "block";
}


/*Habilitar ou desabilitar o botão*/
function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    const senha = isPasswordValid();
    form.login().disabled = !emailValid || !senha;
}


/*Verificando se a senha é válida*/
function isPasswordValid(){
    const senha = form.senha().value;
    if(!senha){
        return false;
    }
    return true;
}


/*Validando o email*/ 
function validateEmail(email){
    return /\S+@\S+\.\S/.test(email);
}


/*Criando variáveis para chamar nas funções*/
const form = {
    email: () => document.getElementById("email"),
    senha: () => document.getElementById("senha"),
    emailObrigatorio: () => document.getElementById("email-obrigatorio"),
    emailInvalido: () => document.getElementById("email-invalido"),
    senhaObrigatoria: () => document.getElementById("senha-obrigatoria"),
    login: () => document.getElementById("login"),
    departamento: () => document.getElementById("departamento")
}

/*
let paginaSelecionada = "";
// Obtém o elemento <select> pelo ID
const departamentoSelect = document.getElementById("departamento");

departamentoSelect.addEventListener("change", function() {

    const selectedValue = departamentoSelect.value;
    console.log("Evento de mudança detectado. Valor selecionado:", selectedValue);

    switch (selectedValue) {
        case 'comercial-varejo':
            paginaSelecionada = "pages/comercial-varejo/index.html";
            break;
        case 'comercial-atacado':
            paginaSelecionada = "pages/comercial-atacado/index.html";
            break;
        case 'compras':
            paginaSelecionada = "pages/compras/index.html";
            break;
        case 'cobranca':
            paginaSelecionada = 'pages/cobranca/index.html';
            break;
        default:
            console.log("Opção inválida")
            paginaSelecionada = "";
        break;
    }
    console.log("Elemento selecionado:", selectedValue);
});
*/