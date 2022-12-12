import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formularios-generos',
  templateUrl: './formularios-generos.component.html',
  styleUrls: ['./formularios-generos.component.css']
})
export class FormulariosGenerosComponent implements OnInit {

  constructor( private formBuilder:FormBuilder) { }

  form: FormGroup

  @Output()
  onSubmit:EventEmitter<generoCreacionDTO>=new EventEmitter<generoCreacionDTO>;

  @Input()
  modelo:generoCreacionDTO;


  @Input()
  errores:string[]=[];

  ngOnInit(): void {

    this.form =this.formBuilder.group({

      nombre:['',{validators:[Validators.required,Validators.minLength(3),      primeraLetraMayuscula()
      ]}]

    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios(){

    this.onSubmit.emit(this.form.value);
  }
  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El Campo Nombre es requerido'
    }
    if(campo.hasError('minlength')){
      return 'La Longitud minima es de 3 caracteres'
    }
    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje
    }
    return '';
  }
  


}