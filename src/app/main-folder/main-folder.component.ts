import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../provider/appState/app-state.service';

@Component({
  selector: 'app-main-folder',
  templateUrl: './main-folder.component.html',
  styleUrls: ['./main-folder.component.scss']
})
export class MainFolderComponent implements OnInit {

  constructor(public appStateService: AppStateService) { }

  ngOnInit() {
  }

}
