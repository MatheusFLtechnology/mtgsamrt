import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { api } from '../../services/api';
import { resolve } from 'dns';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.page.html',
  styleUrls: ['./edit-cliente.page.scss'],
})
export class EditClientePage implements OnInit {
  IdCliente: string="";
  Nome: string="";
  CPF:string="";
  Telefone:string="";
  Email:string="";

  //itens: any=[];

  constructor(private router: Router,
    private provider: api,
    private alertController: AlertController,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.IdCliente=data.IdCliente;
    });
    return new Promise(resolve=>{
      let dados={
        IdCliente:this.IdCliente,
      } 
      this.provider.dadosApi(dados, 'pegar.php').subscribe(
        (data: any)=> {
          //cosole.log("Usuario Cadastrado com sucesso ")
          if(data['itens']==0){
            this.mensagemSucesso(data['mensagem']);
            //this.limparcampos();
          }else{
            for(let item of data['itens']){
              this.Nome= item.Nome;
              this.CPF= item.CPF;
              this.Telefone=item.Telefone;
              this.Email=item.Email;
            }
          }
          
        }
      ); 
     
    });
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
      this.provider.dadosApi(dados, 'editar.php').subscribe(
        (data: any)=> {
          //cosole.log("Usuario Cadastrado com sucesso ")
          if(data['erro']==0){
            this.mensagemSucesso(data['mensagem']);
            //this.limparcampos();
          }else if(data['erro']==1){
            this.mensagemErro(data['mensagem']);
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
}


