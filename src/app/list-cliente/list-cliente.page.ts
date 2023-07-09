import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../../services/api';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.page.html',
  styleUrls: ['./list-cliente.page.scss'],
})
export class ListClientePage implements OnInit {
  itens:any=[];
  pesquisa: string = "";
  start:number=0;
  limit:number=5;
  
  constructor(private router: Router,
    private provider:api,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  cliente(){
    this.router.navigate(['/cliente'])
  }  

  carregar(){
    return new Promise(resolve=>{
      let dados={
        pesquisa: this.pesquisa,
        //star:this.start,
        //limit:this.limit,
      }
      this.provider.dadosApi(dados, 'listar.php').subscribe((data:any)=>{
       if(data['itens']=='0'){
        if(this.start>0){
          this.start-=this.limit;
          this.carregar();
          this.mensagemErro('final da paginação');
        }
       }else{
        this.itens=[];
        for(let item of data['itens']){
          this.itens.push(item);   
        }
       }
    }
     );
  });
}

   async mensagemErro(msg:string){
    const toast= await this.toastController.create({
      message:msg,
      duration: 200,
      color:'danger',
    })
    await toast.present();
   }

paginaAnterior(){
  this.start-=this.limit;
  if(this.start<0){
    this.start=0;
    this.mensagemErro("inicio da Paginação");
  }
  this.carregar();
}
paginaPosterior(){
  //this.start+=this.limit;
 // this.carregar();
}

editarCliente(IdCliente:string){
  this.router.navigate(['/edit-cliente/'+IdCliente])
}
excluirCliente(IdCliente:string){

}

}
