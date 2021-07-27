import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PointRelai } from '../model/pointrelai';
import { PointRelaisService } from '../pointrelai.service';


@Component({
  selector: 'app-list-pointrelais',
  templateUrl: './list-pointrelais.component.html',
  styleUrls: ['./list-pointrelais.component.css']
})
export class ListPointrelaisComponent implements OnInit {

  constructor(private api: PointRelaisService, @Inject(DOCUMENT) private document:Document) { }

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
    this.document.location.href= 'http://localhost:8085/payment/' + pointrelai.id;
  }

}
