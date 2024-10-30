document.addEventListener("DOMContentLoaded", function () {
    const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

    const btnAddEstudiante = document.querySelector("#btnAgregarEstudiante");
    const btnViewEstudiantes = document.querySelector("#btnMostrarEstudiantes");

    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiantes.addEventListener("click", viewEstudiantes);

    let arrayEstudiantes = new Array();

    function addEstudiantes() {
        const inputCarnet = document.querySelector("#inputCarnet").value.trim();
        const inputNombre = document.querySelector("#inputNombre").value.trim();
        const inputApellidos = document.querySelector("#inputApellidos").value.trim();

        if (inputCarnet !== "" && inputNombre !== "" && inputApellidos !== "") {
            arrayEstudiantes.push([inputCarnet, inputNombre, inputApellidos]);

            document.querySelector("#inputCarnet").value = "";
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#inputApellidos").value = "";
            document.querySelector("#inputCarnet").focus();
        } else {
            alert("Faltan campos que completar");
        }
    }

    function viewEstudiantes() {
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0) {
            let table = "<table class='table table-light table-striped'>";
            table += "<thead>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";

            for (let i = 0; i < arrayEstudiantes.length; i++) {
                let carnet = arrayEstudiantes[i][0];
                let nombres = arrayEstudiantes[i][1];
                let apellidos = arrayEstudiantes[i][2];

                table += "<tr>";
                table += `<td scope='row' style='font-weight: bold;'>${i + 1}</td>`;
                table += `<td>${carnet}</td>`;
                table += `<td>${nombres}</td>`;
                table += `<td>${apellidos}</td>`;
                table += "</tr>";
            }

            table += "</tbody>";
            table += "</table>";
            containerEstudiantes.innerHTML = table;
        } else {
            containerEstudiantes.innerHTML = "Ninguno";
            alert("No se han registrado estudiantes");
        }
    }
});