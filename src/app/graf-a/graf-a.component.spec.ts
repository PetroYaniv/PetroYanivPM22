import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafAComponent } from './graf-a.component';

describe('GrafAComponent', () => {
  let component: GrafAComponent;
  let fixture: ComponentFixture<GrafAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrafAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrafAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
