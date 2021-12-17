import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalauteSivuComponent } from './palaute-sivu.component';

describe('PalauteSivuComponent', () => {
  let component: PalauteSivuComponent;
  let fixture: ComponentFixture<PalauteSivuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalauteSivuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalauteSivuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
