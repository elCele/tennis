<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','db_match');

// get the post records
    $playerBattuta = $_POST['playerBattuta'];
    $battutaN = $_POST['battutaN'];
    $battutaDir = $_POST['battutaDir'];
    $rispostaDir = $_POST['rispostaDir'];
    $terzoToccoDir = $_POST['terzoToccoDir'];
    $fg = $_POST['fg'];
    $durataSel = $_POST['durataSel'];
    $vincitore = $_POST['vincitore'];

// database insert SQL code
$sql = "INSERT INTO `tbl_match`(`id`, `playerBattuta`, `battutaN`, `battutaDir`, `rispostaDir`, `terzoToccoDir`, `fg`, `durataSel`, `vincitore`) VALUES ('0','$playerBattuta','$battutaN','$battutaDir','$rispostaDir','$terzoToccoDir','$fg','$durataSel','$vincitore')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>