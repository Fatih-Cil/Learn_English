import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkishEnglishComponent } from './turkish-english.component';

describe('TurkishEnglishComponent', () => {
  let component: TurkishEnglishComponent;
  let fixture: ComponentFixture<TurkishEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurkishEnglishComponent]
    });
    fixture = TestBed.createComponent(TurkishEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
