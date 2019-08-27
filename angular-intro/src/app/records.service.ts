import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  records = [];

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://127.0.0.1:9192/data')
    .subscribe(data => {
      console.log(`We got ${JSON.stringify(data)}`);
      console.log('we are here')
    });
  }
}
