import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

 nombreLower:string = 'minúsculas';
 nombreUpper: string = 'MAYUSCULAS';
 nombreCompleto: string = 'Sandra Rangel';

 fecha: Date = new Date(); 

}
