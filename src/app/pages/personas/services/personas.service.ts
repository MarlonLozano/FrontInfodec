import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interface/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private readonly http:HttpClient) { }

  private apiURL='http://localhost:3000/persona';

  getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiURL);
  }
  

  getOne(id:number){
    
    console.log("ENTRA",id)
    return this.http.get('http://localhost:3000/persona/1');
    
  }
}
