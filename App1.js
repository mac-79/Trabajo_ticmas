//menu 

var menu_visible = false;
let menu = document.getElementById("navegar");
function mostrar_Ocultar_Menu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
// oculta menu 
let links = document.querySelectorAll("navegar a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}