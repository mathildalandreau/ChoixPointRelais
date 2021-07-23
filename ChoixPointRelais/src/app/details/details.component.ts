import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PointRelai } from '../model/pointrelai';
import { PointRelaisService } from '../pointrelai.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pointRelais: PointRelai[] = [];
  pointRelai: PointRelai = new PointRelai;

  constructor(private route: ActivatedRoute, private router: Router, private pointRelaisService: PointRelaisService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.pointRelaisService.getPRbyId(id)
      .subscribe(pointRelai => this.pointRelai = this.pointRelai);
  }

  goBack(): void {
    this.router.navigate(['/pointsRelais']);
  }

}
