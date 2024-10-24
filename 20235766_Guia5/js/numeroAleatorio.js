const numeroAleatorio = Math.floor(Math.random() * 25) + 1;

const numeroIntentos = 3;

let intentos = 1;
function generarNumeroAleatorio(){
    let mensaje;
    const parrafo = document.querySelector("#idParrafo");

    if (intentos <= numeroIntentos){
        let numero = prompt(
            "¿Qué número se ha generado (Intento "+ intentos + ")?"
        );

        if (numero == numeroAleatorio){
            mensaje = `¡Es sorprendente, puedes adivinar el numero oculto (${numeroAleatorio}).
                Refresque la página para volver a jugar`
        } else if (intentos == numeroIntentos){
            mensaje = `Su número de intentos ha terminado.
                El numero oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        } else if (numero > numeroAleatorio){
            mensaje = "El número que ingresó es más alto."
        } else if (numero < numeroAleatorio){
            mensaje = "El número que ingresó es más bajo"
        } else {
            mensaje = `Vuelve a intentar. Quedan ${
                numeroIntentos - intentos
            } intentos`;
        }

        intentos++;
    
    } else {
        mensaje= `Su número de intentos ha terminado.
            El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    }

    parrafo.innerHTML = mensaje;
}