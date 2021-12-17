import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalveluComponent } from './palvelu.component';

describe('PalveluComponent', () => {
  let component: PalveluComponent;
  let fixture: ComponentFixture<PalveluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalveluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalveluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
