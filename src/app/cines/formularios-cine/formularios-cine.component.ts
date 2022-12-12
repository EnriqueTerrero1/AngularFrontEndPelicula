import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formularios-cine',
  templateUrl: './formularios-cine.component.html',
  styleUrls: ['./formularios-cine.component.css']
})
export class FormulariosCineComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup

  @Input()
    modelo:cineCreacionDTO;

    @Input()
    errores: string[]=[];
  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadasInicial:Coordenada[]=[];
     
  
  ngOnInit(): void {

    this.form = this.formBuilder.group({

      nombre:['',{validators: [Validators.required],},],
      latitud:['',{validatos:[Validators.required]}],
      longitud:['',{validatos:[Validators.required]}]


    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadasInicial.push({latitud:this.modelo.latitud,longitud:this.modelo.longitud })
    }
  }
  onSubmit(){
      this.guardarCambios.emit(this.form.value);
  }

  coordenadaSeleccionada(coordenada:Coordenada){

    this.form.patchValue(coordenada);
  }

}
