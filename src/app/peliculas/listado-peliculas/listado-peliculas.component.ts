import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor(private peliculasService: PeliculasService,private router:Router) { }

  @Input()
  peliculas: PeliculaDTO[];

  @Output()
  borrado: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.peliculas;
  }

  borrar(peliculaId: number): void {
    this.peliculasService.borrar(peliculaId)
    .subscribe(() => {this.borrado.emit(); this.router.navigate(["/peliculas/buscar"]) ;});
  }

}