import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  urlBackend:string = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  createAlumno(alumno:Alumno){

    return this.http.post<any>(this.urlBackend+"/alta-alumno",alumno);
  }


  iniciarSesion(){
    let header = new HttpHeaders();
      header = header.set('Authorization', 'Basic bWljYWVsYS5ydXNjb25pOm1hcjEycw==');
      header = header.set('Content-Type','application/x-www-form-urlencoded');
  
      const payload = new HttpParams()
       .set('usuario', "micaela.rusconi")
        .set('password', "mar12s");

    return this.http.post<any>("http://181.30.35.222/camaras/api/usuarios/login",payload,{headers:header});
  }

 


}
