function comenzar(){
    var boton=document.getElementById("guardar");
    boton.addEventListener("click", infoNew, false);
}

function infoNew(){
    var info=document.getElementById("cajaT").nodeValue;
    sessionStorage.setItem(info);
    leer_inf(info);
}

window.addEventListener("load",comenzar,false);