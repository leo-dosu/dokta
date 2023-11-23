import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallLogsComponent } from 'src/app/admin-module/call-logs/call-logs.component';
import { DashboardComponent } from 'src/app/admin-module/dashboard/dashboard.component';
import { EditProfileComponent } from 'src/app/admin-module/edit-profile/edit-profile.component';
import { HomeComponent } from 'src/app/admin-module/home/home.component';
import { NotificationSettingComponent } from 'src/app/admin-module/notification-setting/notification-setting.component';
import { NotificationsComponent } from 'src/app/admin-module/notifications/notifications.component';
import { ProfileSettingsComponent } from 'src/app/admin-module/profile-settings/profile-settings.component';
import { ReportsComponent } from 'src/app/admin-module/reports/reports.component';
import { ResetPasswordComponent } from 'src/app/reset-password/reset-password.component';

const routes: Routes = [
  {path: '', component: HomeComponent, 
  children: [
    {path: 'dashboard', component: DashboardComponent}, 
    {path: 'edit-profile/:userID', component: EditProfileComponent},
    {path: 'notifications/:userID', component: NotificationsComponent},
    {path: 'reset-password', component: ResetPasswordComponent}, 
    {path: 'call-logs', component: CallLogsComponent},
    {path: 'report', component: ReportsComponent},
    {path: 'notifications-settings/:userID', component: NotificationSettingComponent },
    {path: 'profile-settings/:userID', component: ProfileSettingsComponent}, 
    {path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'}, 
    ],
  }, 
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {


 }
