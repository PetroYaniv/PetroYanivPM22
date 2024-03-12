import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrafickinfoComponent } from './strafickinfo.component';

describe('StrafickinfoComponent', () => {
  let component: StrafickinfoComponent;
  let fixture: ComponentFixture<StrafickinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrafickinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrafickinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
