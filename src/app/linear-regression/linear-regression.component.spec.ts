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
  
  // Test 1

  it('Should return B0 = -22.55 with the dataset Data_Test1', () => {
    const b0 = component.b0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 1.7279);
    expect(b0).toBeCloseTo(-22.55, 1);
  });

  it('Should return B1 = 1.7279 with the dataset Data_Test1', () => {
    const b1 = component.b1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(b1).toBeCloseTo(1.7279, 4);
   });

  it('Should return yk = 644.429 with the dataset Data_Test1 if x =386', () => {
    const yk = component.yk(1.7279, -22.55, 386);
    expect(yk).toBeCloseTo(644.429, 1);
  });

  // Test 2

  it('Should return B0 = -4.039 with the dataset Data_Test2', () => {
    const b0 = component.b0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 0.1681);
    expect(b0).toBeCloseTo(-4.039, 1);
  });

  it('Should return B1 = 0.1681 with the dataset Data_Test2', () => {
    const b1 = component.b1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(b1).toBeCloseTo(0.1681, 4);
   });

  it('Should return yk = 60.858 with the dataset Data_Test2 if x =386', () => {
    const yk = component.yk(0.1681, -4.039, 386);
    expect(yk).toBeCloseTo(60.858, 1);
  });

  // Test 3

  it('Should return B0 = -23.92 with the dataset Data_Test3', () => {
    const b0 = component.b0([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 1.43097);
    expect(b0).toBeCloseTo(-23.92, 1);
  });

  it('Should return B1 = 1.43097 with the dataset Data_Test3', () => {
    const b1 = component.b1([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(b1).toBeCloseTo(1.43097, 4);
   });

  it('Should return yk = 528.4294 with the dataset Data_Test3 if x =386', () => {
    const yk = component.yk(1.43097, -23.92, 386);
    expect(yk).toBeCloseTo(528.4294, 1);
  });

  // Test 4

  it('Should return B0 = -4.604 with the dataset Data_Test4', () => {
    const b0 = component.b0([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 0.1402);
    expect(b0).toBeCloseTo(-4.604, 1);
  });

  it('Should return B1 = 0.1402 with the dataset Data_Test4', () => { // Debería ser 0.1402, no 0.16064 como decía inicialmente
    const b1 = component.b1([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(b1).toBeCloseTo(0.1402, 4);
   });

  it('Should return yk = 49.4994 with the dataset Data_Test4 if x =386', () => {
    const yk = component.yk(0.1402, -4.604, 386);
    expect(yk).toBeCloseTo(49.4994, 1);
  });
});