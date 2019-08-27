import { Component, OnInit } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  records = {};

  constructor(private recordsService: RecordsService) {
  }

  ngOnInt() {
    this.records = this.recordsService.getData();
  }
}
