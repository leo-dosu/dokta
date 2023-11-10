import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-call-log-grid',
  templateUrl: './call-log-grid.component.html',
  styleUrls: ['./call-log-grid.component.css']
})
export class CallLogGridComponent {
  @Input() data: string[][] = [];

  
}

