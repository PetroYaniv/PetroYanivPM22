import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafcComponent } from './grafc.component';

describe('GrafcComponent', () => {
  let component: GrafcComponent;
  let fixture: ComponentFixture<GrafcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrafcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrafcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
