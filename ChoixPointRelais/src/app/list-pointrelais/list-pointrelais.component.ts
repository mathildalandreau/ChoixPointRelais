import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PointRelai } from '../model/pointrelai';
import { PointRelaisService } from '../pointrelai.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-pointrelais',
  templateUrl: './list-pointrelais.component.html',
  styleUrls: ['./list-pointrelais.component.css']
})
export class ListPointrelaisComponent implements OnInit {

  constructor(private api: PointRelaisService, @Inject(DOCUMENT) private document:Document, private router: Router,  private route : ActivatedRoute,) { }

  ngOnInit(): void {
    this.getPRS();
  }

  pointRelais: PointRelai[] = [];
  choosePointRelais : PointRelai;

  getPRS() {
    this.api.getPRS().subscribe(
      (data) => { this.pointRelais = data }
    )
  }

  selectPointRelais(pointrelai): void {
    console.log(pointrelai);
    console.log(pointrelai.id);
    this.router.navigate(['/details', pointrelai.id]);
    //this.document.location.href= 'http://localhost:3000/pointsRelais/' + pointrelai.id;
  }

}
