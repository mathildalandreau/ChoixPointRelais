import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PointRelai } from '../model/pointrelai';
import { PointRelaisService } from '../pointrelai.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pointRelais$: Observable<PointRelai[]>;

  constructor(
    private pointRelaisService : PointRelaisService,
    private router : Router
  ) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pointRelais$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.pointRelaisService.searchPointRelais(term)),
    );
  }
  gotoDetail(pointrelai: PointRelai): void {
    let link = ['/pointrelai', pointrelai.id];
    this.router.navigate(link);
  }
}
