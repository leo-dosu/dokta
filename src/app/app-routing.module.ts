import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { CallLogsComponent } from './call-logs/call-logs.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path:'login', component: LoginComponent},
  {path: 'profile-settings', component: ProfileSettingsComponent},
  {path: 'call-logs', component: CallLogsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
