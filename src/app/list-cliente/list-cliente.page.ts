import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../../services/api';
@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.page.html',
  styleUrls: ['./list-cliente.page.scss'],
})
export class ListClientePage implements OnInit {
  itens:any=[];
  pesquisa: string = ""
  
  constructor(private router: Router,
    private provider:api) { }

  ngOnInit() {
  }

  cliente(){
    this.router.navigate(['/cliente'])
  }  

  carregar(){
    return new Promise(resolve=>{
      let dados={
        pesquisa: this.pesquisa,
      }
      this.provider.dadosApi(dados, 'listar.php').subscribe((data:any)=>{
       if(data['itens']=='0'){

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
}
