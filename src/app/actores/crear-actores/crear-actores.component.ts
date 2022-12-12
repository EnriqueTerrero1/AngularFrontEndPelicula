import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { actorCreacionDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-crear-actores',
  templateUrl: './crear-actores.component.html',
  styleUrls: ['./crear-actores.component.css']
})
export class CrearActoresComponent implements OnInit {

  constructor(private actoresService:ActoresService, private router:Router) { }

  ngOnInit(): void {
  }
  errores=[];

 
  guardarCambios(actor: actorCreacionDTO){
    this.actoresService.crear(actor)
    .subscribe(() => {
      this.router.navigate(['/actores']);
    }, errores => this.errores = parsearErroresAPI(errores))
  }

}
