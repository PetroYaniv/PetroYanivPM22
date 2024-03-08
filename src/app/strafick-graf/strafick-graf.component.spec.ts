import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrafickGrafComponent } from './strafick-graf.component';

describe('StrafickGrafComponent', () => {
  let component: StrafickGrafComponent;
  let fixture: ComponentFixture<StrafickGrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrafickGrafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrafickGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
