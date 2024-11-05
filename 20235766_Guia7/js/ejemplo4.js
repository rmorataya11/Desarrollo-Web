const buttonAgregarPagina = document.querySelector("#idAgregarPagina");
const buttonMenu = document.querySelector("#idAgregarMenu");
const buttonTitulo = document.querySelector("#idAgregarTitulo");
const buttonParrafo = document.querySelector("#idAgregarParrafo");

const pagina = document.querySelector("#idPagina");

buttonAgregarPagina.onclick = function () {
    const contenedorVeridicando = document.querySelector("#idDivPage");

    if (!contenedorVeridicando) {
        const contenedor = document.createElement("div");
        contenedor.setAttribute("id", "idDivPage");
        contenedor.setAttribute("class", "container");
        contenedor.setAttribute(
            "style",
            "border:solid 1px black; height:500px; overflow: scroll; overflow-x: hidden;"
        );

        pagina.appendChild(contenedor);
    } else {
        alert("Ya se agrego el contenedor de la pagina");
    }
};

buttonMenu.onclick = function () {
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {
        const menuVerificar = document.querySelectorAll("#idDivPage > header");

        if (menuVerificar.length == 0) {
            const menu = document.querySelector("header").cloneNode(true);
            contenedor.appendChild(menu);
            alert("¡El menú ha sido agregado al menú!");
        } else {
            alert("El menú ya fue agregado");
        }
    } else {
        alert("¡Primero debe agregar un contenedor de página!");
    }
};

buttonTitulo.onclick = function () {
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {
        const titulo = prompt("Agregue el título de la página");

        if (titulo.length > 0) {
            const verificarTitulo = document.querySelectorAll("#idDivPage > header");

            if (titulo != "" && titulo != null) {
                const h1 = document.createElement("h1");
                h1.innerText = titulo;
                h1.classList = "display-5 text-center fw-bold py-4 my-4";
                contenedor.appendChild(h1);
                alert("¡Título agregado con éxito!");
            } else {
                alert("Debe registrar como mínimo un título, por favor ingrese información");
            }
        } else {
            alert("Debe agregar un menú primero");
        }
    } else {
        alert("¡Primero debe agregar un contenedor de página!");
    }
};

buttonParrafo.onclick = function () {
    const contenedor = document.querySelector("#idDivPage");

    const menu = document.querySelectorAll("#idDivPage > header");

    if (contenedor) {
        if (menu.length > 0) {
            let texto = prompt("Agregue un párrafo a su página web");

            if (texto != "" && texto != null) {
                const parrafo = document.createElement("p");
                parrafo.setAttribute("class", "lead mb-4 py-4");
                parrafo.innerHTML = texto;
                contenedor.appendChild(parrafo);
            } else {
                alert("No se ha registrado ningún párrafo, por favor ingrese información");
            }
        } else {
            alert("Debe agregar un menú primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de página");
    }
};