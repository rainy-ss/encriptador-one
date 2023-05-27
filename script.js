let btnLimpiar = document.getElementById('limpiar');


btnLimpiar.addEventListener('click', () => {

    const mensaje = document.getElementById('txt-original');

    mensaje.value = "";

    
})


function validaMensajeEncripta(mensaje){
    let regex = "[^A-Za-z0-9ñÑ\\s.,?!¿¡\"#$%&/()=+-:;]";

    console.log(mensaje.search(regex));
    if(mensaje.search(regex) != -1){
        alert("Tu texto contiene caracteres inválidos!");
    }
    else{
        encripta(mensaje.toLowerCase());
    }
    
}


function validaMensajeDesencripta(mensaje){
    let regex = "[^A-Za-z0-9ñÑ\\s.,?!¿¡\"#$%&/()=+-:;]";

    console.log("---  " + mensaje.search(regex));
    if(mensaje.search(regex) != -1){
        alert("Tu texto contiene caracteres inválidos!");
    }
    else{
        desencripta(mensaje.toLowerCase());
    }
    
}

function crearResultado(mensaje){
    const areaOutput = document.getElementById('output');

    const oldOutput = document.querySelector('.old-out');

    const divOutput = document.createElement('div');
    divOutput.setAttribute("class", "output-procesado old-out");

    let textoFinal = document.createElement('textarea');
    textoFinal.appendChild(document.createTextNode(mensaje));
    textoFinal.setAttribute("readonly", true);
    textoFinal.setAttribute("id", "txt-final");

    let btnCopiar = document.createElement('button');
    btnCopiar.appendChild(document.createTextNode("Copiar"));
    btnCopiar.setAttribute('class', 'copiar');
    btnCopiar.setAttribute('id', 'btn-copiar');
    btnCopiar.addEventListener('click', copiarTexto);

    divOutput.appendChild(textoFinal);
    divOutput.appendChild(btnCopiar);

    areaOutput.replaceChild(divOutput, oldOutput);

}



function encripta(mensaje){
    let msjModifA = mensaje.replaceAll("a", "ai");
    let msjModifE = msjModifA.replaceAll("e", "enter");
    let msjModifI = msjModifE.replaceAll("i", "imes");
    let msjModifO = msjModifI.replaceAll("o", "ober");
    let msjModifU = msjModifO.replaceAll("u", "ufat");
    
    crearResultado(msjModifU);
}

function desencripta(mensaje){
    let msjModifU = mensaje.replaceAll("ufat", "u");
    let msjModifO = msjModifU.replaceAll("ober", "o");
    let msjModifI = msjModifO.replaceAll("imes", "i");
    let msjModifE = msjModifI.replaceAll("enter", "e");
    let msjModifA = msjModifE.replaceAll("ai", "a");
    

    crearResultado(msjModifA);

}


let buttonEncriptar = document.getElementById('encriptar');


buttonEncriptar.addEventListener('click', () => {

    const mensajeInicial = document.getElementById('txt-original').value;

    validaMensajeEncripta(mensajeInicial);

    
})


let buttonDesencriptar = document.getElementById('desencriptar');

buttonDesencriptar.addEventListener('click', () => {
    const mensajeInicial = document.getElementById('txt-original').value;

    validaMensajeDesencripta(mensajeInicial);
})



function copiarTexto(){

    const texto = document.getElementById("txt-final").value;
    console.log(texto);

    let btnCopiar = document.getElementById('btn-copiar');
    btnCopiar.setAttribute("class", "copiar active");
    btnCopiar.textContent = "Copiado";
    



    if(typeof (navigator.clipboard) == 'undefined'){
        var textarea = document.createElement("textarea");
        textarea.textContent = texto;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("No se pudo copiar.", ex);
        }
        finally {
            document.body.removeChild(textarea);
        }
    } else{
        navigator.clipboard.writeText(texto);
    }

}