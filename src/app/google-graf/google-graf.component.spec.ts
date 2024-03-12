import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleGrafComponent } from './google-graf.component';

describe('GoogleGrafComponent', () => {
  let component: GoogleGrafComponent;
  let fixture: ComponentFixture<GoogleGrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleGrafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
