<?php

$playerBattuta = $_POST['playerBattuta'];
$battutaN = $_POST['battutaN'];
$battutaDir = $_POST['battutaDir'];
$rispostaDir = $_POST['rispostaDir'];
$terzoToccoDir = $_POST['terzoToccoDir'];
$fg = $_POST['fg'];
$durataSel = $_POST['durataSel'];
$vincitore = $_POST['vincitore'];

if (!empty($playerBattuta) || !empty($battutaN) || !empty($battutaDir) || !empty($rispostaDir) || !empty($terzoToccoDir) || !empty($fg) || !empty($durataSel) || !empty($vincitore)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $bdname = "tennis_db";

    
} else {
    echo "All field are required";
    die();
}

?>