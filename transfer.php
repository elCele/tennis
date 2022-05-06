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

    // create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
        $INSERT = "INSERT INTO `match_tbl`(`playerBattuta`, `battutaN`, `battutaDir`, `rispostaDir`, `terzoToccoDir`, `fg`, `duarataSel`, `vincitore`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    }

    $stmt = $conn->prepare($INSERT);
    $stmt->bind_param($playerBattuta, $battutaN, $battutaDir, $rispostaDir, $terzoToccoDir, $fg, $durataSel, $vincitore);
    $stmt->execute();
    echo "New record inserted sucessfully";

    $stmt->close();
    $conn->close();

} else {
    echo "All field are required";
    die();
}

?>