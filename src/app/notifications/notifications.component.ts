import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  isSwitchOn: boolean = false;

  toggleSwitch(): void {
    this.isSwitchOn = !this.isSwitchOn;
  }

}
