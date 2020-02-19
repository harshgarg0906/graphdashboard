
import {  Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { HighchartsService } from './service/highcharts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  @ViewChild('mySidenav') public mySidenav: ElementRef;
   
  openNav(){
    this.mySidenav.nativeElement.style.width="250px";
    
  }
  closeNav(){
    this.mySidenav.nativeElement.style.width="0px";
  }
  constructor(private highcharts: HighchartsService) { }
  ngOnInit(){
   
  }
  
}

