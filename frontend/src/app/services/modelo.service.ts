import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Modelo } from '../interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

 
  private api="http://localhost:3300/backend";

  constructor(private httpclient:HttpClient) 
  { }
  getAllModelo(){
    const path=`${this.api}/modelo`;
    return this.httpclient.get<Modelo[]>(path);
  }
  getmodeloById(id:string){
    const path=`${this.api}/modelo/${id}`;
    return this.httpclient.get<Modelo[]>(path);
  }
  
  createModelo(modelo:Modelo){
    const path=`${this.api}/modelo`;
    return this.httpclient.post(path,modelo);
  }

  updateModelo(id: any, modelo:Modelo){
    const path=`${this.api}/modelo/${id}`;
    return this.httpclient.put(path, modelo);
  }
  
  deleteModelo(_id:string){
    const path=`${this.api}/modelo/${_id}`;
    return this.httpclient.delete(path);
  }
 
  
}
