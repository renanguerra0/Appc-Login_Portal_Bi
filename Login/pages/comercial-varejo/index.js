
function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "../../login.html"
    }).catch(()=> {
        alert("Erro ao fazer logout")
    })
}


/*Mostrar e ocultar a barra*/
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
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

/* Adicionando funções aos botões*/
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