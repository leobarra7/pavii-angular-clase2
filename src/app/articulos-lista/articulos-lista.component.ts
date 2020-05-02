import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia} from '../models/articulofamilia';
import {ArticulosFamilias} from '../models/articulosfamilia-coleccion';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {
  listaArticulos: ArticuloFamilia[];

  constructor() {}

  ngOnInit(): void {
    this.listaArticulos = ArticulosFamilias;
  }
}