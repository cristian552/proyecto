import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../interfaces/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  http: any;
  
  private api="http://localhost:3300/backend";

  constructor(private httpclient:HttpClient) 
  { }
  getAllMarca(){
    const path=`${this.api}/marca`;
    return this.httpclient.get<Marca[]>(path);
  }
  getmarcaById(id:string){
    const path=`${this.api}/marca/${id}`;
    return this.httpclient.get<Marca[]>(path);
  }
  
  createMarca(marca:Marca){
    const path=`${this.api}/marca`;
    return this.httpclient.post(path,marca);
  }

  updateMarca(id: any, marca:Marca){
    const path=`${this.api}/marca/${id}`;
    return this.httpclient.put(path, marca);
  }
  
  deleteMarca(_id:string){
    const path=`${this.api}/marca/${_id}`;
    return this.httpclient.delete(path);
  }
 
  
  
}