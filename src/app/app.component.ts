import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  data = [];

  constructor() {

  }

  ngOnInit() {
    this.data = this.getData();
  }

  getData() {
    return [
      {
        'accountNumber': 12345,
        'balance': 100.00,
        'status': 'Active'
      }
    ];
  }
}
