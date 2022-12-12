import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }

  @Input()
  peliculas:PeliculaDTO[];
  ngOnInit(): void {
  }



  remover(indecePelicula:number){

    this.peliculas.splice(indecePelicula,1);

  }
}
