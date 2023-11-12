import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallLogsComponent } from './call-logs/call-logs.component';
import { CallLogGridComponent } from './call-log-grid/call-log-grid.component';
import { SettingComponent } from './setting/setting.component';
import { NotificationsComponent } from './notifications/notifications.component';

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
    SettingComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
