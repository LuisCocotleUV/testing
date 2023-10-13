import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent]
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return mean = 550.6 with the data: 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503', () => {
    const data = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    expect(component.calculateMean(data)).toBeCloseTo(550.6);
  });

  it('Should return mean = 60.32 with the data: 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4,198.7,38.8,138.2', () => {
    const data = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2];
    expect(component.calculateMean(data)).toBeCloseTo(60.32);
   });
});