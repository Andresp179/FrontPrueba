import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaFarmacia';
  
  
  chanceForm = new FormGroup({
    numeroFilaUno: new FormControl(""),
    numeroFilaDos: new FormControl(""),
    numeroFilaTres: new FormControl(""),
    numeroFilaCuatro: new FormControl(""),
    numeroFilaCinco: new FormControl(""),
    tipoDocumento: new FormControl(""),
    numeroDocumento: new FormControl(""),
    nombreCliente: new FormControl(""),
    valoresModalidades: new FormControl([]),
  });
}
