import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orden } from '../interfaces/orden';
import { Cliente } from '../interfaces/cliente';
import { Marca } from '../interfaces/marca';
import { Modelo } from '../interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(public httpclient: HttpClient) {
  }
  private api="http://localhost:3300/backend";

  getAllOrden(){
    return new Promise(resolve =>{
      this.httpclient.get(`${this.api}/orden`).subscribe(data =>{
        resolve(data);
      });
    });
  } 

  getOrdenById(id:string){
    const path=`${this.api}/orden/${id}`;
    return this.httpclient.get<Orden[]>(path);
  }  

  createOrden(orden:Orden){
    const path=`${this.api}/orden`;
    return this.httpclient.post(path,orden);
  }

  updateOrden(id: any, orden:Orden){
    const path=`${this.api}/orden/${id}`;
    return this.httpclient.put(path,orden);
  }

  deleteOrden(_id:string){
    const path=`${this.api}/orden/${_id}`;
    return this.httpclient.delete(path);
  }

  getAllCliente(){
    const path=`${this.api}/cliente`;
    return this.httpclient.get<Cliente[]>(path);
  }
  getAllMarca(){
    const path=`${this.api}/marca`;
    return this.httpclient.get<Marca[]>(path);
  }
  getAllModelo(){
    const path=`${this.api}/modelo`;
    return this.httpclient.get<Modelo[]>(path);
  }
  
}
