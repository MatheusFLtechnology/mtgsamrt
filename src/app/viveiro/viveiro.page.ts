import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viveiro',
  templateUrl: './viveiro.page.html',
  styleUrls: ['./viveiro.page.scss'],
})
export class ViveiroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  cliente(){
    this.router.navigate(['/cliente'])
  }
}
