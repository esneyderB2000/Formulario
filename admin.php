<?php
$conexion = new mysqli("sql307.infinityfree.com", "if0_38727555", "prueba1001", "if0_38727555_empresa");


if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$resultado = $conexion->query("SELECT * FROM usuarios");

echo "<h2>Lista de usuarios registrados</h2>";
echo "<ul>";

while ($fila = $resultado->fetch_assoc()) {
    echo "<li>" . htmlspecialchars($fila['nombre']) . "</li>";
}

echo "</ul>";

$conexion->close();
?>