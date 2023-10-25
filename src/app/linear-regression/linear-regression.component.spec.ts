import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LinearRegressionComponent } from './linear-regression.component';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LinearRegressionComponent]
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return B0 = -22.55 with the dataset Data_Test1', () => {
    const b0 = component.b0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 1.7279);
    expect(b0).toBeCloseTo(-22.55, 1); // Comprueba si b0 está cerca de -22.55 con una precisión de 1 decimal
  });

  it('Should return B1 = 1.7279 with the dataset Data_Test1', () => {
    const b1 = component.b1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(b1).toEqual(1.7279);
  });

  it('Should return yk = 644.429 with the dataset Data_Test1 if x = 386', () => {
    const yk = component.yk(1.7279, -22.55, 386);
    expect(yk).toBeCloseTo(644.429, 1); // Comprueba si yk está cerca de 644.429 con una precisión de 1 decimal
  });  
});
