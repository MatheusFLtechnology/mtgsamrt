import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addviveiro',
  templateUrl: './addviveiro.page.html',
  styleUrls: ['./addviveiro.page.scss'],
})
export class AddviveiroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cliente(){
    this.router.navigate(['/cliente'])
  }


}
