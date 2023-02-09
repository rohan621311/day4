import { Injectable } from '@angular/core';
import {district} from 'src/assets/data/image/data'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getData(){
    return district
  }
}
