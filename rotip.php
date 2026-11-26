<?php
include("geoiploc.php");
$ip = $_SERVER["REMOTE_ADDR"];
$id = $_GET["rotip"];
$archivo = fopen("name.txt","a");
fputs($archivo,getCountryFromIP($ip,"
NamE")."-----------------".$ip."-----------------".$id."\n");
fclose($archivo);
?>