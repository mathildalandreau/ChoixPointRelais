import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPointrelaisComponent } from './list-pointrelais.component';

describe('ListPointrelaisComponent', () => {
  let component: ListPointrelaisComponent;
  let fixture: ComponentFixture<ListPointrelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPointrelaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPointrelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
