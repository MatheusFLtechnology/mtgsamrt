import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { api } from '../../services/api';
import { resolve } from 'dns';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {
  IdCliente:string="";
  Nome: string="";
  CPF:string="";
  Telefone:string="";
  Email:string="";



  constructor(private router: Router, private actRoute:ActivatedRoute,
    private provider: api,
    private alertController: AlertController
    //private toastController: ToastController,
    ) { }

  ngOnInit() {
    //act Router para receber e passar parámetro entre página
    this.actRoute.params.subscribe((data:any)=>{
      this.IdCliente="---";
      this.Nome=data.Nome;
      this.CPF=data.CPF;
      this.Telefone=data.Telefone;
      this.Email=data.Email;

    })
  }



salva(){
  return new Promise(resolve=>{
    let dados={
      IdCliente:this.IdCliente,
      Nome:this.Nome,
      CPF:this.CPF,
      Telefone:this.Telefone,
      Email:this.Email,

    } 
    this.provider.dadosApi(dados, 'inserir.php').subscribe(
      (data: any)=> {
        //cosole.log("Usuario Cadastrado com sucesso ")
        if(data['erro']==0){
          this.mensagemSucesso(data['mensagem']);
          this.limparcampos();
        }else if(data['erro']==1){
          console.log(data['mensagem']);
        }
        
      }
    ) 
  }
    
  );
}
  
  async mensagemSucesso(msg:string){
    const arlet=await this.alertController.create({
      header:'alerta',
      message:msg,
      buttons:['ok'],
    })
  }

  mensagemErro(arg0: any) {
    throw new Error('Method not implemented.');
  }
cliente(){
  this.router.navigate(['/cliente'])
}  

limparcampos(){
  this.IdCliente="";
  this.Nome="";
  this.CPF="";
  this.Telefone="";
  this.Email="";
}



}
