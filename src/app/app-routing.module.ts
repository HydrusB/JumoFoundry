import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componants/main/main.component';
import { LoginComponent } from './componants/login/login.component';

const routes: Routes = [
  {path: '', component:MainComponent}
  , { path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
