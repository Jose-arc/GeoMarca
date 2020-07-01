import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../provider/appState/app-state.service';

@Component({
  selector: 'app-main-folder',
  templateUrl: './main-folder.component.html',
  styleUrls: ['./main-folder.component.scss']
})
export class MainFolderComponent implements OnInit {

  public h: number = 0;
  public m: number = 0;
  public s: number = 0;
  public mls: number = 0;
  public timeStart;
  public isDisabled: boolean = false;
  public x;
  public horaActual;

  constructor(public appStateService: AppStateService) {}

  ngOnInit() {
  }

  Iniciar = () =>{
    let hr, min, seg, mlsg;
    const timerScreen = document.getElementById('tiempo');
    this.mls ++;

    if(this.mls > 99){ this.s++, this.mls = 0;}
    if(this.s > 59){ this.m++, this.s = 0; }
    if(this.m > 59){ this.h++, this.m = 0; }
    if(this.h > 24){ this.h = 0; }

    mlsg = ('0' + this.mls).slice(-2);
    seg = ('0' + this.s).slice(-2);
    min = ('0' + this.m).slice(-2);
    hr = ('0' + this.h).slice(-2);

    timerScreen.innerHTML = `${hr}:${min}:${seg}.${mlsg}`;
  }

  start(){
    this.Iniciar
    this.isDisabled = !this.isDisabled;
    this.timeStart = setInterval(this.Iniciar, 10);
  }

  stop(){
    this.isDisabled = !this.isDisabled;
    clearInterval(this.timeStart);
  }

  reset(){
    clearInterval(this.timeStart);
    
    const timerScreen = document.getElementById('tiempo');

    timerScreen.innerHTML = '00:00:00.00';
    this.h = 0;
    this.m = 0;
    this.s = 0;
    this.mls = 0;
  }

}
