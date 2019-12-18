import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})

export class GmapComponent implements OnInit{
  map: google.maps.Map;
   
@ViewChild('map', { static: true }) mapElement: any;

  constructor() { }

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }
  
}



