import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ApiMqtt } from '../../services/api.mqtt';
//import {Router}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  server: string = "http://localhost";
  port: string = "3000";
  result: string = "";
  sensors:any;
  sensor:any;
  topic: string = "";
  dado:string = "";

  constructor(private apimqtt: ApiMqtt,
    private router: Router) {}


  pegarDadosSensores(){
    this.apimqtt.dadosSensores(this.server, this.port).subscribe((data: any) => {
      this.sensors = data.sensors;

      this.result = this.sensors;
    });
  }

  pegarDadosSensor(){
    this.apimqtt.dadosSensor(this.server, this.port, this.topic).subscribe((data:any) => {
      this.sensor = data.value;

      this.result = this.sensor;
    });
  }

  enviarDado(){
    const pub: any = {
      topic: this.topic,
      value: this.dado,
    };

    this.apimqtt.publiDados(this.server, this.port, pub).subscribe((data: any) => {
      this.sensor = data.value;
    })
  }
  backtoMain(){
    this.router.navigate([''])
  }

}
