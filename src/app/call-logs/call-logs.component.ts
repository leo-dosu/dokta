import { Component } from '@angular/core';

@Component({
  selector: 'app-call-logs',
  templateUrl: './call-logs.component.html',
  styleUrls: ['./call-logs.component.scss']
})
export class CallLogsComponent {

  gridData: string[][] = [
    ['Column 1', 'Column 2', 'Column 3', '14-10-2023 11:12 AM',   'complete','-- : --',  'N/A'],
    ['Column 1', 'Column 2', 'Column 3', '14-10-2023 11:12 AM',   'ongoing', '20:45', 'Column 7'],
    ['Column 1', 'Column 2', 'Column 3', '14-10-2023 11:12 AM',   'cancelled', '30:00', 'Column 7'],
    // test cases
];



}
