import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreititysComponent } from './adminreititys.component';

describe('AdminreititysComponent', () => {
  let component: AdminreititysComponent;
  let fixture: ComponentFixture<AdminreititysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreititysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreititysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
