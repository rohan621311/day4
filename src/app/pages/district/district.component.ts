import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
constructor(private obj:DataService){}
district = this.obj.getData();


}
