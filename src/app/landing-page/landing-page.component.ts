import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

constructor( private peliculasService:PeliculasService) { }
  peliculasEnCines:PeliculaDTO[];
    peliculasProximosEstrenos:PeliculaDTO[];
    title = 'AngularPelicula';

  ngOnInit(): void {
       

   this.peliculasService.obtenerLandingPage().subscribe(landingPage =>{
    this.peliculasEnCines = landingPage.enCines;
    this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
   });
     
  }


  manejarRated(voto:number):void{
    alert(voto);
  
  }

}
