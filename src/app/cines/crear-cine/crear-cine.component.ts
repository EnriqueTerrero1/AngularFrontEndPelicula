import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { cineCreacionDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {
  
  errores:string[]=[];

  constructor(private router: Router, private cinesService: CinesService) { }



  ngOnInit(): void {


  }
  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
    this.cinesService.crear(cine).subscribe(() => {
      this.router.navigate(['/cines']);
    }, (error) => this.errores = parsearErroresAPI(error));

  }

}
