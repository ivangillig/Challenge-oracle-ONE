
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



const botonEncriptar = document.querySelector("#btn-encriptar");


botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
	var textoIngresado = document.querySelector("#input-texto").value;
    
    var encrypted = encriptar(textoIngresado);
   
    const desencriptado = document.querySelector("#msg");
    desencriptado.value = encrypted;
  
});

const botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
 	var textoIngresado = document.querySelector("#input-texto").value;
    
     var decrypted = desencriptar(textoIngresado);
   
     const desencriptado = document.querySelector("#msg");
     desencriptado.value = decrypted;
  
 });



function encriptar (textoIngresado) {
    
    if(validaRegex(textoIngresado)){
        alert("El mensaje no puede contener caracteres especiales ni acentos...");
        window.location.reload();
        return;
    }else{
        var textoDesencriptado = [];

        for (var i = 0; i< textoIngresado.length; i++) {
            var caracter = textoIngresado.charAt(i);
            
                switch (caracter){
                    case "a":
                        textoDesencriptado[i] ="ai";
                        break;

                    case "e":
                        textoDesencriptado[i] = "enter";
                        break;

                    case "i":
                        textoDesencriptado[i] = "imes";
                        break;

                    case "o":
                        textoDesencriptado[i] = "ober";
                        break;

                    case "u":
                        textoDesencriptado[i] = "ufat";
                        break;

                    case " ":
                        textoDesencriptado[i] = " ";
                        break;

                    default:
                        textoDesencriptado[i] = caracter;
                        break;

                }
        }

        return textoDesencriptado.join('');
    }
 
 }

 function desencriptar (textoIngresado) {
    
        
        textoIngresado = textoIngresado.replaceAll("ai", "a");
        textoIngresado = textoIngresado.replaceAll("enter", "e");
        textoIngresado = textoIngresado.replaceAll("imes", "i");
        textoIngresado = textoIngresado.replaceAll("ober", "o");
        textoIngresado = textoIngresado.replaceAll("ufat", "u");

        // for (var i = 0; i< textoIngresado.length; i++) {
        //     var caracter = textoIngresado.charAt(i);


        //         switch (caracter){
        //             case "ai":
        //                 textoDesencriptado[i] ="a";
        //                 break;

        //             case "enter":
        //                 textoDesencriptado[i] = "e";
        //                 break;

        //             case "imes":
        //                 textoDesencriptado[i] = "i";
        //                 break;

        //             case "ober":
        //                 textoDesencriptado[i] = "o";
        //                 break;

        //             case "ufat":
        //                 textoDesencriptado[i] = "u";
        //                 break;

        //             case " ":
        //                 textoDesencriptado[i] = " ";
        //                 break;

        //             default:
        //                 textoDesencriptado[i] = caracter;
        //                 break;

        //         }
        // }

        return textoIngresado;
    }
 
 


 const botonCopiar = document.querySelector("#btn-copy");

 botonCopiar.addEventListener("click", function(event) {
    var mensaje = document.querySelector("#msg");
    var texto = mensaje.value;
    copyTextToClipboard(texto);
  });

 function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }



 function validaRegex(mensaje){
    const regExp    = new RegExp( /[^a-z ]/ ) // --- minusculas sin acentos ni especiales
    const resultado = regExp.test( mensaje ) // --- cadena a probar
    
    return resultado;
    
 }
