import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor( private seguridadService:SeguridadService) { }


  @Input()
  maximoRating =5;
  @Input()
  ratingSeleccionado=0;
  maximoRaingArr=[];

  votado = false;
  ratingAnterior;

  @Output()
  rated:EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {

    this.maximoRaingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index:number):void{

    this.ratingSeleccionado=index+1;
  }
  manejarMouseLeave(){
    if(this.ratingAnterior !==0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado=0;
    }
  }
  rate(index:number):void{

    if(this.seguridadService.estaLogueado()){
    this.ratingSeleccionado=index+1;
    this.votado=true;
    this.ratingAnterior = this.ratingSeleccionado;

    this.rated.emit(this.ratingSeleccionado);
    }else{
      Swal.fire('Debe Loguearse',"No puede realizar esta accion",'error');
    }
  }



}
