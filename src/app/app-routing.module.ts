import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstService } from 'src/app/provider/const/const.service';

// Components
import { MainFolderComponent } from 'src/app/main-folder/main-folder.component';

const routes: Routes = [
  {path:'', redirectTo: ConstService.defaultUrl, pathMatch: 'full'},
  {path: ConstService.defaultUrl, component: MainFolderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
