import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nombre: string = 'Nombre Usuario';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  cambiarNombre() {
    this.nombre = 'Mario Rossi';
    this.dataService.usuarioService = this.nombre;

  }
  homedesdeService(nuevoNombre:any){
this.nombre = nuevoNombre;
this.dataService.usuarioService = nuevoNombre;
  }
}
