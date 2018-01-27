import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrCardsComponent } from './curr-cards.component';

describe('CurrCardsComponent', () => {
  let component: CurrCardsComponent;
  let fixture: ComponentFixture<CurrCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
