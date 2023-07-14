import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiMqtt{

    private options:any = {Headers: new HttpHeaders({'content-type': 'application/json;charset=UTF-8'})}

    constructor(
      private http: HttpClient,
      private httpClient: HttpClientModule,
    ){

    }
    dadosSensores(server:string, port: string){
      return this.http.get(server + ':' + port + '/')
    }

    dadosSensor(server:string, port: string, topic: string){
      return this.http.get(server + ':' + port + '/' + topic)
    }

    publiDados(server:string, port: string, data: any){
     return this.http.post(server + ':' + port + '/' + 'send-mqtt', JSON.stringify(data), this.options);
    }
}
