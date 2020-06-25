import { Injectable } from '@angular/core';
import { Countdown } from '../../models/countdown-model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public countDown : Countdown = new Countdown();

  constructor() { 
    this.isLogin();
  }

  isLogin(): void{
    let localstorage_User = localStorage.getItem('user');
    if(!localstorage_User) Swal.fire({
      title: 'Bienvenido',
      icon: 'warning',
      html: '<p>Usted no posee registro en esta app con sus credenciales</p>' +
            '<p>de Geovictoria, por favor continue con el proceso para tener</p>'+
            '<p>un registro de estas.</p>',
      focusConfirm: true,
      confirmButtonText: 'Entendido'
    })
    .then((res)=>{
      if(res.value){
         Swal.mixin({
          input: 'text',
          confirmButtonText: 'Siguiente',
          title: 'Bienvenido',
          text: 'Usted no posee un usuario en esta App, porfavor!',
          showCancelButton: true,
          showLoaderOnConfirm: true,
          progressSteps: ['1', '2'],
        }).queue([
          {
            title: 'Usuario',
            text: 'Ingrese su usuario de Geovictoria'
          },
          {
            title: 'Password',
            text: 'Ingrese su password de Geovictoria',
            input: 'password'
    
          },
          
        ]).then((result: any) => {
          if (result.value) {
            const answers = JSON.stringify(result.value);
            localStorage.setItem('user',answers);
          }
        });
      }
    });

  }
}
