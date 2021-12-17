import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReititysComponent } from './reititys.component';

describe('ReititysComponent', () => {
  let component: ReititysComponent;
  let fixture: ComponentFixture<ReititysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReititysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReititysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
