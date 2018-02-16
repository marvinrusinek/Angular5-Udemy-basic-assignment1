import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: 'warning-alert.component.html',
  styles: [`
	          #warningBox p {
	              color: red;
                text-align: center;
            }`
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
