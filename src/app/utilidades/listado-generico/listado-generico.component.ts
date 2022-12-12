import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.css']
})
export class ListadoGenericoComponent implements OnInit {

  constructor() { }

  @Input()
  listado;
  ngOnInit(): void {
  }

}
