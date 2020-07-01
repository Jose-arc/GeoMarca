import { Injectable } from '@angular/core';
import { Countdown } from '../../models/countdown-model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { 
    this.isLogin();

    //inicia el temporizador con la hora exacta js
    var starHora = setInterval(this.checkHora, 1000);
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
          confirmButtonText: 'Siguiente',
          title: 'Bienvenido',
          text: 'Usted no posee un usuario en esta App, porfavor!',
          showCancelButton: true,
          showLoaderOnConfirm: true,
          progressSteps: ['1', '2', '3', '4'],
        }).queue([
          {
            title: 'Usuario',
            text: 'Ingrese su usuario de Geovictoria',
            input: 'text'
          },
          {
            title: 'Password',
            text: 'Ingrese su password de Geovictoria',
            input: 'password'
    
          },
          {
            title: 'Hora de Almuerzo',
            html: '<div class="container__hora">' +
                  '<input type="time" name="time" id="timeLaunch" />' +
                  '</div>'
          },
          {
            title: 'Hora de Salida',
            html: '<div class="container__hora">' +
                  '<input type="time" name="time" id="timeOut" />' +
                  '</div>'
          }
        ]).then((result: any) => {
          if (result.value) {
            let timeLaunch = (document.getElementById('timeLaunch') as HTMLInputElement).value;
            let timeOut = (document.getElementById('timeOut') as HTMLInputElement).value;
            alert(JSON.stringify({time1: timeLaunch, time2: timeOut}));
            const answers = JSON.stringify(result.value);
            localStorage.setItem('user',answers);
          }
        });
      }
    });

  }

  checkHora = () =>{
    var d = new Date();
    var t = d.toLocaleTimeString();

    if(t === '18:38:00'){
      Swal.fire({
        icon: 'warning',
        title: 'Recordatorio',
        text: 'Hora de marcar QLO!!'
      });
    }
  }

  stopCheckHora = (id) =>{
    clearInterval(id);
  }

}
