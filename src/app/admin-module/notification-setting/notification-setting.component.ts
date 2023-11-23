import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-setting',
  templateUrl: './notification-setting.component.html',
  styleUrls: ['./notification-setting.component.css']
})
export class NotificationSettingComponent {
  isSwitchOn: boolean = false;

  toggleSwitch(): void {
    this.isSwitchOn = !this.isSwitchOn;
  }
}
