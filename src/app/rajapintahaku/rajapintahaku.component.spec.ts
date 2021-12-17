import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajapintahakuComponent } from './rajapintahaku.component';

describe('RajapintahakuComponent', () => {
  let component: RajapintahakuComponent;
  let fixture: ComponentFixture<RajapintahakuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajapintahakuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RajapintahakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
