import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HakukenttaComponent } from './hakukentta.component';

describe('HakukenttaComponent', () => {
  let component: HakukenttaComponent;
  let fixture: ComponentFixture<HakukenttaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HakukenttaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HakukenttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
