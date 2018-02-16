import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: 'success-alert.component.html',
  styles: [`
	          #successBox p {
                color: green;
                text-align: center;
            }`
  ]
})

export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
