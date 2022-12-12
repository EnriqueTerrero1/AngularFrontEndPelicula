import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

cambioMarkdown(texto:string) {

  this.form.get('biografia').setValue(texto);
}
  @Input()
    errores:string[]=[];
  constructor( private formBuilder:FormBuilder) { }

  form : FormGroup

  @Input()
  modelo:actorDTO;

  @Output()
  Onsubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();



  imagenCambiada:boolean=false;
  ngOnInit(): void {

    this.form=this.formBuilder.group({

      nombre:['',{validators:[Validators.required]},],
      fechaNacimiento:'',
      foto:'',
      biografia:''

    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }


  archivoSeleccionado(file){

    this.imagenCambiada=true;
    this.form.get('foto').setValue(file);

  }
 onSubmit(){

  if(!this.imagenCambiada){
    this.form.patchValue({'foto':null})
  }
  this.Onsubmit.emit(this.form.value);
 }

}
