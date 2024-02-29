import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafbComponent } from './grafb.component';

describe('GrafbComponent', () => {
  let component: GrafbComponent;
  let fixture: ComponentFixture<GrafbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrafbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrafbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
