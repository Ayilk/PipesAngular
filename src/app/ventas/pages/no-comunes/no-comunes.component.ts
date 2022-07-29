import { Component} from '@angular/core';
import { interval } from 'rxjs';

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

  //KeyValue Pipe

  persona = {
    nombre: 'Sandra',
    edad: '25',
    dirección: "Otawa, Canadá"
  }

  //JsonPepe
  heroes=[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]


  //Async Pipe
  miObservable = interval(1000); // 0,1,2,3,

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve("Tenemos data de promesa")
    }, 3500)
  })
}
