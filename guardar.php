<?php
$conexion = new mysqli("sql307.infinityfree.com", "if0_38727555", "prueba1001", "if0_38727555_empresa");


if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$nombre = $_POST['nombre'];

$sql = "INSERT INTO usuarios (nombre, contra) VALUES ('$nombre', '$contra')";

if ($conexion->query($sql) === TRUE) {
    echo "Nombre guardado correctamente. <a href='index.html'>Volver</a>";
} else {
    echo "Error: " . $conexion->error;
}

$conexion->close();
?>