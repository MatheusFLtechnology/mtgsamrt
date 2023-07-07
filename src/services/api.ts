import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs';

@Injectable()
export class api{
    serve: string='http://localhost/apimtgsmart/';
    constructor(private http: HttpClient){

    }

     dadosApi(dados: any, api:string){
        const httpOpitions={
            headers: new HttpHeaders({'content-Type': 'application/json'})
            }
        let url=this.serve + api;
        return this.http.post(url,JSON.stringify(dados),httpOpitions).pipe(map(res=>res));   


     }
    
}
