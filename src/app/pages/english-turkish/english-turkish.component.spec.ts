import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTurkishComponent } from './english-turkish.component';

describe('EnglishTurkishComponent', () => {
  let component: EnglishTurkishComponent;
  let fixture: ComponentFixture<EnglishTurkishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglishTurkishComponent]
    });
    fixture = TestBed.createComponent(EnglishTurkishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
