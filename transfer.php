<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','db_match');

// get the post records
    $batTotG2 = $_POST['batTotG2'];
    $batPrimaG2 = $_POST['batPrimaG2'];
    $batSecondaG2 = $_POST['batSecondaG2'];
    $batNoneG2 = $_POST['batNoneG2'];
    $batEG2 = $_POST['batEG2'];
    $batCG2 = $_POST['batCG2'];
    $batIG2 = $_POST['batIG2'];
    $rispTotG2 = $_POST['rispTotG2'];
    $rispNoneG2 = $_POST['rispNoneG2'];
    $rispCG2 = $_POST['rispCG2'];
    $rispTG2 = $_POST['rispTG2'];
    $rispDG2 = $_POST['rispDG2'];
    $rispLG2 = $_POST['rispLG2'];
    $t3TotG2 = $_POST['t3TotG2'];
    $t3NoneG2 = $_POST['t3NoneG2'];
    $t3CG2 = $_POST['t3CG2'];
    $t3T2 = $_POST['t3TG2'];
    $t3D2 = $_POST['t3DG2'];
    $t3L2 = $_POST['t3LG2'];
    $winG2 = $_POST['winG2'];
    $quattro = $_POST['quattro'];
    $otto = $_POST['otto'];
    $nove = $_POST['nove'];

// database insert SQL code
$sql = "INSERT INTO `tbl_match`(`id`, `batTot`, `batPrima`, `batSeconda`, `batNone`, `batE`, `batC`, `batI`, `rispTot`, `rispNone`, `rispC`, `rispT`, `rispD`, `rispL`, `t3Tot`, `t3None`, `t3C`, `t3T`, `t3D`, `t3L`, `f`, `g`, `win`, `quattro`, `otto`, `nove`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]','[value-12]','[value-13]','[value-14]','[value-15]','[value-16]','[value-17]','[value-18]','[value-19]','[value-20]','[value-21]','[value-22]','[value-23]','[value-24]','[value-25]','[value-26]')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>