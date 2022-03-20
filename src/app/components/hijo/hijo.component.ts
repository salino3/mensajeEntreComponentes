import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  @Input() nombreHijo2: string = 'sin nombre';
  @Output() ultimoCambioNombredelHijo = new EventEmitter<any>();
 // constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  cambioNombre2function() {
    this.nombreHijo2 = 'Alberto Gismondi';
    this.ultimoCambioNombredelHijo.emit(this.nombreHijo2);
//1º way opcional..    this.dataService.usuarioService = this.nombreHijo2;
  }
}
