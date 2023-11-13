import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showDropdown: boolean = false;

  toggleDropdown(event: Event): void {
    this.showDropdown = !this.showDropdown;
  }
}
