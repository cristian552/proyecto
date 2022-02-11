import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private api="http://localhost:3300/backend";
  

  constructor(private httpclient:HttpClient) { }

  getAllCliente(){
    const path=`${this.api}/cliente`;
    return this.httpclient.get<Cliente[]>(path);
  }

  getClienteById(id:string){
    const path=`${this.api}/cliente/${id}`;
    return this.httpclient.get<Cliente[]>(path);
  }

  createCliente(cliente:Cliente){
    const path=`${this.api}/cliente`;
    return this.httpclient.post(path,cliente);
  }
  updateCliente(id: any, cliente:Cliente){
    const path=`${this.api}/cliente/${id}`;
    return this.httpclient.put(path,cliente);
  }

  deleteCliente(_id:string){
    const path=`${this.api}/cliente/${_id}`;
    return this.httpclient.delete(path);
  }

}
