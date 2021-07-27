import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PointRelai } from '../model/pointrelai';
import { PointRelaisService } from '../pointrelai.service';
import { Horaire } from '../model/horaire';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pointRelais: PointRelai[] = [];
  pointRelai: PointRelai = new PointRelai;
  horaires: Horaire[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
     private pointRelaisService: PointRelaisService, @Inject(DOCUMENT) private document:Document) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
   
    this.pointRelaisService.getPR(id)
      .subscribe(pointRelai => this.pointRelai = pointRelai);
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  goToPayment(pointrelai) : void {
    this.document.location.href= 'http://localhost:8085/payment/' + pointrelai.id;
  }

}
