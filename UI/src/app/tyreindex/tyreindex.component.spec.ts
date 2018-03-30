import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreindexComponent } from './tyreindex.component';

describe('TyreindexComponent', () => {
  let component: TyreindexComponent;
  let fixture: ComponentFixture<TyreindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyreindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
