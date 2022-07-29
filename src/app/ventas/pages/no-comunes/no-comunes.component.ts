import { Component} from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Sanddra';
  nombre1: string = 'Marcos';
  genero: string = 'femenino';
  genero1: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Pablo', 'Eduardo', 'Javier','Laura', 'Beatriz'];
  clientesMapa = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarCliente(){
    this.nombre = 'Marcos';
    this.genero = 'masculino'
  }
  borrarCliente(clientes: string[]){
    this.clientes = clientes;
    clientes.pop()
  }

}
