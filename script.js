const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

function guardarFactura() {
    const cliente = {
        nombre: document.getElementById('name').value,
        telefono: document.getElementById('tel').value,
        direccion: document.getElementById('direccion').value,
        factura: document.getElementById('factura').value,
        valor: document.getElementById('valor').value
    };

    if (cliente.factura) {
        localStorage.setItem(cliente.factura, JSON.stringify(cliente));
        alert("Datos guardados correctamente.");
        exportarAExcel();
    } else {
        alert("Por favor, ingresa un número de factura.");
    }
}

// Consulta los datos por número de factura
function consultar() {
    const factura = prompt("Ingrese el número de factura a consultar:");

    if (factura) {
        const datos = localStorage.getItem(factura);

        if (datos) {
            const cliente = JSON.parse(datos);
            document.getElementById('name').value = cliente.nombre;
            document.getElementById('tel').value = cliente.telefono;
            document.getElementById('direccion').value = cliente.direccion;
            document.getElementById('factura').value = cliente.factura;
            document.getElementById('valor').value = cliente.valor;
        } else {
            alert("No se encontraron datos para esa factura.");
        }
    }
}



function guardar() {

    let timerInterval;
    Swal.fire({
        title: "¿Guardando!",
        html: "Guardando en <b></b> milisegundos.", 
        timer: 1500, 
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100); 
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
        
    });
}



function consulta(){
    window.location.href = "/Consulta/consulta.html";
}





function validarFormulario() {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    if (usuario === "123" && contrasena === "123") {
        Swal.fire({
            html: '<h2>Hola de nuevo!!<br></h2><br><p>Ingresando a: Registro de Facturacion.</p>',
            icon: "success",
            confirmButtonText: "Ingresar",
            width: 700,
            padding: '10px 0px 50px 0px',
            backdrop: `rgb(0, 0, 0, 0.8)`,
            confirmButtonColor: 'green',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                window.location.href = "/Formulario/formulario.html";
            }
        });

    }
    else if (usuario === "" && contrasena === "") {
        Swal.fire({
            html: '<h2>Campos Vacios<br></h2><br><p>Debes llenar los datos para continuar. Intenta Nuevamente.</p>',
            icon: "question",
            confirmButtonText: "Llenar Datos",
            width: 700,
            padding: '10px 0px 50px 0px',
            backdrop: `rgb(0, 0, 0, 0.8)`,
            confirmButtonColor: 'red',
            allowOutsideClick: false
        });
        document.getElementById('Forms').reset();
    }
    else {
        Swal.fire({
            html: '<h2>Oops...<br></h2><br><p>Usuario y/o Contraseña Incorrectos. Intenta Nuevamente.</p>',
            icon: "error",
            confirmButtonText: "Reintentar",
            width: 700,
            padding: '10px 0px 50px 0px',
            backdrop: `rgb(0, 0, 0, 0.8)`,
            confirmButtonColor: 'red',
            allowOutsideClick: false
        });
        document.getElementById('Forms').reset();
    }
}





function exportarAExcel() {
    // 1. Recolectar todos los datos desde localStorage
    const datos = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));
        datos.push(item);
    }

    // 2. Convertir datos a una hoja Excel
    const ws = XLSX.utils.json_to_sheet(datos);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Clientes");

    // 3. Descargar el archivo Excel
    XLSX.writeFile(wb, "clientes.xlsx");
}