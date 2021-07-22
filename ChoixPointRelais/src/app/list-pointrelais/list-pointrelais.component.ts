import { Component, OnInit } from '@angular/core';
import { PointRelai } from '../model/pointrelai';
import { PointRelaisService } from '../pointrelai.service';


@Component({
  selector: 'app-list-pointrelais',
  templateUrl: './list-pointrelais.component.html',
  styleUrls: ['./list-pointrelais.component.css']
})
export class ListPointrelaisComponent implements OnInit {

  constructor(private api : PointRelaisService) { }

  ngOnInit(): void {
    this.getPRS();
  }

  pointRelais : PointRelai[] = [];

  getPRS(){
    this.api.getPRS().subscribe(
      (data) => {this.pointRelais = data}
    )
  }

}
