import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SimpsonComponent } from './simpson.component';
import { SimpsonService } from '../services/simpson.service';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SimpsonComponent ],
      providers: [SimpsonService]
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return p=16.0 if x0=0, X1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
    const data = {x0: 0, x1: 4, num_seg: 4, ERROR: 0.0001, f_x: '2x'};
    const p = component.calculateSimpson(data);
    expect(p).toBeCloseTo(16.0, 4);
  });

  it('Should return p=0.3333 if x0=0, X1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2', () => {
    const data = {x0: 0, x1: 1, num_seg: 4, ERROR: 0.0001, f_x: 'x^2'};
    const p = component.calculateSimpson(data);
    expect(p).toBeCloseTo(0.3333, 4);
  });

  it('Should return p=1.38 if x0=1, X1=4, num_seg=6, ERROR=0.0001 and f(x)=1/x', () => {
    const data = {x0: 1, x1: 4, num_seg: 6, ERROR: 0.0001, f_x: '1/x'};
    const p = component.calculateSimpson(data);
    expect(p).toBeCloseTo(1.38, 1);
  });
});
