import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NelilaskinComponent } from './nelilaskin.component';

describe('NelilaskinComponent', () => {
  let component: NelilaskinComponent;
  let fixture: ComponentFixture<NelilaskinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NelilaskinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NelilaskinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
