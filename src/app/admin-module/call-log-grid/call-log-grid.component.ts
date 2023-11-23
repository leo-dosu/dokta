import { Component,Input } from '@angular/core';

interface call_grid{

}

@Component({
  selector: 'app-call-log-grid',
  templateUrl: './call-log-grid.component.html',
  styleUrls: ['./call-log-grid.component.css']
})
export class CallLogGridComponent {
  @Input() data: string[][] = [];

  
}

