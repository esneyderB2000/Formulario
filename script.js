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
    document.getElementById('Forms').reset();
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