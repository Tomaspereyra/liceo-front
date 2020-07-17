import { Component, OnInit } from '@angular/core';
import { Alumno } from '../model/alumno';
import { AlumnoService } from '../service/alumno.service';

@Component({
  selector: 'app-usuarioform',
  templateUrl: './usuarioform.component.html',
  styleUrls: ['./usuarioform.component.css']
})
export class UsuarioformComponent implements OnInit {
 
  alumno:Alumno = new Alumno();

  alumnoGuardado:boolean;

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.iniciarSesion().subscribe(res=>{
      console.log(res);
    },err => {
      console.log(err);
    })
  }
  
  save(){

    this.alumnoService.createAlumno(this.alumno).subscribe(res=>{
      this.alumnoGuardado = true;
    },error=>{
      this.alumnoGuardado = false;
    })

  }

}
