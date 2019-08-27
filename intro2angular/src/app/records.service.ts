import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData() {
    return [
    {
      name: 'Axel',
      online: true
    },
    {
      name: 'Bankuna',
      online: false
    },
    {
      name: 'Spencer',
      online: true
    },
    {
      name: 'Trafiq',
      online: true
    },
    {
      name: 'Rich',
      online: false
    },
    {
      name: 'Miguel',
      online: true
    },
    {
      name: 'Kobe',
      online: true
    }
  ];
  }
}
