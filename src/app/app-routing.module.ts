import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { CallLogsComponent } from './call-logs/call-logs.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path:'login', component: LoginComponent},
  {path: 'profile-settings/:userID', component: ProfileSettingsComponent},
  {path: 'edit-profile/:userID', component: EditProfileComponent}, 
  {path: 'call-logs', component: CallLogsComponent},
  {path: 'notifications/:userID', component: NotificationsComponent},
  {path: 'notifications-settings/:userID', component: NotificationSettingComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
