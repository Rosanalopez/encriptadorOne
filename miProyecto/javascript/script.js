
alert("hola soy un mesaje externo");
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeDecodicificar = document.querySelector(".copiar");


/*contenido.style.display ="none";*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}



function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

/*function btnCopiar(){

	const textoCopiado = copiar (mensajeDecodicificar.value);
	mensaje.value = textoCopiado;
	mensajeDecodicificar.value = "";
    alert("se copio");
}*/
function btnCopiar(){

    var mensajeEncriptado = mensaje.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    textArea.value = "";
    alert("Texto copiado al portapapeles")
    
}