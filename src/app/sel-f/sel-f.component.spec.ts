import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelFComponent } from './sel-f.component';

describe('SelFComponent', () => {
  let component: SelFComponent;
  let fixture: ComponentFixture<SelFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
