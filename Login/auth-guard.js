/*
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "../../login.html";
    }
})
*/
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // O usuário está autenticado, talvez você queira redirecioná-lo para a página inicial do aplicativo.
        // window.location.href = "página_inicial.html";
        console.log("");
    } else {
        // O usuário não está autenticado, redirecione para a página de login.
        window.location.href = "../../login.html";
    }
});