import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backtoMain(){
    this.router.navigate([''])
  }

  cliente(){
    this.router.navigate(['/cliente'])
  }

  viveiro(){
    this.router.navigate(['/viveiro'])
  }

  addviveiro(){
    this.router.navigate(['/addviveiro'])
  }
  add_cliente(){
    this.router.navigate(['/add-cliente'])
  }
  list_cliente(){
    this.router.navigate(['/list-cliente'])
  }

}
