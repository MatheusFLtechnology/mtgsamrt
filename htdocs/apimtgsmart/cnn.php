<?php

header('Access-Control-Allow-Origin:*');
header('Access-control-Allow-Credentials:true');
header('Access-Control-Allow-Methods:POST, GET,OPUIONS');
header('Access-Control-Allow-Headers: Content-type, Authrization, X-Requested-With');
header('Content-type: application/json; chartset=utf-8');

date_default_timezone_set('America/Sao_Paulo');
@session_start();

$servidor='localhost';
$usuario='usermtgmart';
$senha='#12345';
$banco='mtmart';

try{
   $pdo= new PDO("mysql:dbname=$banco; host=$servidor", "$usuario", "$senha");
}catch(Exception $e){
    echo 'Erro ao conectar com o banco!!'. $e;

}
