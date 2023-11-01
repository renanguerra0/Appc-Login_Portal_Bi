
/*Mostrar e ocultar a barra*/
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

/*Loop para buscar as imagens na pasta*/

for(var i = 0; i < 10; i++){    
    var img = document.createElement("img"); //criar elemento img
    img.src = "RH-teste/" + i + ".png"; //atribuindo a propriedade source da imagem  
    img.width = "400";

    img.onerror = function() {
        console.log("Erro: A imagem " + this.src + " não foi encontrada."); //Verificando
        this.style.display = "none"; // Caso não encontre a imagem, ocultar o erro. 
    };
        document.getElementById("content").appendChild(img); //adicionando imagem como filha de demo e exibindo na tela
}

/* Adicionando funções aos botões*/

let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");

link1.addEventListener("click", function(){
    //console.log("Clicou no link1");

    let div = document.querySelector("#content");
    console.log(div);

    div.innerHTML = '<iframe title="015.2 Inadimplencia por Polo" width="1400" height="700" src="https://app.powerbi.com/reportEmbed?reportId=fce4842b-24f1-4429-8f6e-506eaab2243d&navContentPaneEnabled=false&autoAuth=true&ctid=f5c1c89d-9a3a-480b-b011-2d2c3d6ce25d" frameborder="0" allowFullScreen="true"></iframe>'
});



link2.addEventListener("click", function(){
    //console.log("Clicou no link2");

    let div = document.querySelector("#content");
    console.log(div);

    div.innerHTML = '<iframe title="034 Vendas-gerentes" width="1400" height="700" src="https://app.powerbi.com/reportEmbed?reportId=b3471f8c-8adb-4a05-b207-85b4af37ed5e&navContentPaneEnabled=false&autoAuth=true&ctid=f5c1c89d-9a3a-480b-b011-2d2c3d6ce25d" frameborder="0" allowFullScreen="true"></iframe>'
});


/* Mostrar e ocultar texto */

let mensagem = document.querySelector(".mensagem") ;

// mostra a mensagem
function showMessage(){   
   mensagem.style.display = "block";   
 }
// esconde a mensagem
function hideMessage(){
  mensagem.style.display = "none"; 
}