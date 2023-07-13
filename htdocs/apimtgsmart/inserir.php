<?php
require_once('cnn.php');
$postjson= json_decode(file_get_contents('php://input'),true);

//echo $postjson;


$IdCliente= ""; //$postjson['IdCliente'];
$CPF= "";  //$postjson['CPF'];
$Nome= ""; //$postjson['Nome'];
$Telefone= ""; //$postjson['Telefone'];
$Email= "";//$postjson['Email'];

# algoritimo de validação dos dados
if(isset($postjson['CPF'])&& $postjson['CPF'] != ""){
    
        $CPF=$postjson['CPF'];
    }else{
        echo json_encode(array('mensagem'=>'Dgite um CPF Valido!'));
        exit();
    }


if(isset($postjson['Nome'])&& $postjson['Nome'] != ""){
    $Nome=$postjson['Nome'];
}else{
    echo json_encode(array('mensagem'=>'preencha o campo Nome!'));
    exit();
}
if(isset($postjson['Telefone'])&& $postjson['Telefone'] != ""){
    
    $Telefone=$postjson['Telefone'];
    
}else{
    echo json_encode(array('mensagem'=>'preencha o campo Telefone!'));
    exit();
}
if(isset($postjson['Email'])&& $postjson['Email'] != ""){
    $Nome=$postjson['Email'];
}else{
    echo json_encode(array('mensagem'=>'preencha o campo Email!'));
    exit();
}


#Preencha o SQL com as informação do banco

$res= $pdo->prepare("INSERT INTO cliente SET Nome =:Nome,
       CPF=:CPF,
       Telefone= :Telefone,
       Email= :Email    
");

#bind do sql com os dados que serão iseridos no banco

//$res->bindValue(":IdCliente",$IdCliente);
$res->bindValue(":Nome",$Nome);
$res->bindValue(":CPF",$CPF);
$res->bindValue(":Telefone",$Telefone);
$res->bindValue(":Email",$Email);

$res->execute();

$result= json_encode(array('erro'=> 0, 'mensagem'=> 'Salvo com Sucesso'));

?>




