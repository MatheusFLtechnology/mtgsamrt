<?php
require_once('cnn.php');
$postjason=json_decode(file_get_contents('php://input'),true);




$Idcliente=$postjason['IdCliente'];

$query= $pdo->query("DELETE FROM  cliente WHERE IdCliente =$Idcliente");
    
$result=json_encode(array('erro'=>0,'mensagem'=> 'Cliente excluido com sucesso.'));
echo $result;



?>