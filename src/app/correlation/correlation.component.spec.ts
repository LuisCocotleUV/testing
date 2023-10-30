import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CorrelationComponent } from './correlation.component';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Agrega esta línea
      declarations: [ CorrelationComponent ]
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 1

  it('Test 1: Should return R = 0.9545 and RR = 0.9111 with the dataset Data_Test1', () => {
    const Data_Test1 = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    const R = component.coeficiente(Data_Test1.proxy_size, Data_Test1.actual_added);
    expect(R).toBeCloseTo(0.9545, 4);

    const RR = component.r2(R);
    expect(RR).toBeCloseTo(0.9111, 4);
  });

  // Test 2

  it('Test 2: Should return R = 0.9333 and RR = 0.8711 with the dataset Data_Test2', () => {
    const Data_Test2 = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    const R = component.coeficiente(Data_Test2.proxy_size, Data_Test2.actual_develop);
    expect(R).toBeCloseTo(0.9333, 3);

    const RR = component.r2(R);
    expect(RR).toBeCloseTo(0.8711, 3);
  });


  // Test 3

  it('Test 3: Should return R = 0.9631 and RR = 0.9276 with the dataset Data_Test3', () => {
    const Data_Test3 = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };

    const R = component.coeficiente(Data_Test3.plan_added, Data_Test3.actual_added);
    expect(R).toBeCloseTo(0.9631, 3);

    const RR = component.r2(R);
    expect(RR).toBeCloseTo(0.9276, 3);
  });

  // Test 4

  it('Test 4: Should return R = 0.9480 and RR = 0.8988 with the dataset Data_Test4', () => {
    const Data_Test4 = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };

    const R = component.coeficiente(Data_Test4.plan_added, Data_Test4.actual_develop);
    expect(R).toBeCloseTo(0.9480, 3);

    const RR = component.r2(R);
    expect(RR).toBeCloseTo(0.8988, 3);
  });
});