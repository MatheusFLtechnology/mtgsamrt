<?php
require_once('cnn.php');
$postjason=json_decode(file_get_contents('php://input'),true);


//$start=intVal($postjason['start']);
//$limit=intVal($postjason['limit']);

$IdCliente=$postjason['IdCliente'];

$busca= '%' .  $postjason['pesquisa'] .  '%';
$query= $pdo->query("SELECT * from cliente WHERE IdCliente = '$IdCliente'");
         
          


$res = $query->fetchAll(PDO::FETCH_ASSOC);

$total_reg=@count($res);

if($total_reg>0){
    for($i=0; $i<$total_reg;$i++){
        $dados[]=array(
            'IdCliente'=>$res[$i]['IdCliente'],
            'CPF'=>$res[$i]['CPF'],
            'Nome'=>$res[$i]['Nome'],
            'Telefone'=>$res[$i]['Telefone'],
            'Email'=>$res[$i]['Email'],
        ); 
    }
    $result=json_encode(array('itens'=>$dados));
    echo $result;
}else{
    $result=json_encode(array('itens'=>0));
    echo $result;
}


?>