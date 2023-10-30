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
});