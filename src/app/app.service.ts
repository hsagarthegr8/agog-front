import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public hostname = 'localhost:8000/'
  constructor() { }
}
