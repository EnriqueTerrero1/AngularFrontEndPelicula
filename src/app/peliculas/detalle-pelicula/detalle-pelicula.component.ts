import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Coordenada, CoordenadaConMensaje } from 'src/app/utilidades/mapa/coordenada';
import { PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  constructor( private peliculaService:PeliculasService,
    private activatedRoute:ActivatedRoute,private sanitizar:DomSanitizer) { }


    pelicula:PeliculaDTO;
    fechaLanzamiento:Date;
    trailerURL:SafeResourceUrl;
    coordenadas:CoordenadaConMensaje[]=[];
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.peliculaService.obtenerPorId(params['id']).subscribe(pelicula =>{
        console.log(pelicula);
        this.pelicula = pelicula;
        this.fechaLanzamiento=new Date(this.pelicula.fechaLanzamiento);
        this.trailerURL=this.generarURLYoutubeEmbed(this.pelicula.trailer);
        this.coordenadas= pelicula.cines.map(cine=>{ return {longitud:cine.longitud,latitud:cine.latitud,mensaje:cine.nombre}});
      })
    })


  }

  generarURLYoutubeEmbed(url:any):SafeResourceUrl{
    if(!url){
      return '';
    }

    var video_id=url.split('v=')[1];
    var posicionAmpersand = video_id.indexOf('&');
    if(posicionAmpersand !== -1){
      video_id=video_id.substring(0,posicionAmpersand);

    }

    return this.sanitizar.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video_id}`)
  }

}
