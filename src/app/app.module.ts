import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileSettingsComponent } from './admin-module/profile-settings/profile-settings.component';
import { NavbarComponent } from './admin-module/navbar/navbar.component';
import { HomeComponent } from './admin-module/home/home.component';
import { DashboardComponent } from './admin-module/dashboard/dashboard.component';
import { CallLogsComponent } from './admin-module/call-logs/call-logs.component';
import { CallLogGridComponent } from './admin-module/call-log-grid/call-log-grid.component';
import { EditProfileComponent } from './admin-module/edit-profile/edit-profile.component';
import { NotificationsComponent } from './admin-module/notifications/notifications.component';
import { NotificationSettingComponent } from './admin-module/notification-setting/notification-setting.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReportsComponent } from './admin-module/reports/reports.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LoginComponent,
    ProfileSettingsComponent,
    NavbarComponent,
    DashboardComponent,
    CallLogsComponent,
    CallLogGridComponent,
    EditProfileComponent,
    NotificationsComponent,
    NotificationSettingComponent,
    ResetPasswordComponent,
    ReportsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
