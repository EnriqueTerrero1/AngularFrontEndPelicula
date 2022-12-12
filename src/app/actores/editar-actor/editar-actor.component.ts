import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerosService } from 'src/app/generos/generos.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { actorCreacionDTO, actorDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private router:Router,private actoresService:ActoresService,private activedRoute:ActivatedRoute) { }

  errores:string[]=[];
  modelo:actorDTO;
  ngOnInit(): void {

    this.activedRoute.params.subscribe(params =>{ 
      //alert(params['id']);
      this.actoresService.obtenerPorId(params['id']).subscribe(actor =>{ this.modelo=actor;},()=>this.router.navigate(['/generos']));
      
    })

   

  }

  guardarCambios(actor:actorCreacionDTO){
    this.actoresService.editar(this.modelo.id,actor).subscribe(()=>{
      this.router.navigate(['/actores']);
    },error=>this.errores=parsearErroresAPI(error))
    
  }
}