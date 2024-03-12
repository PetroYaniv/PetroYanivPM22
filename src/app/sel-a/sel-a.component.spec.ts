import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelAComponent } from './sel-a.component';

describe('SelAComponent', () => {
  let component: SelAComponent;
  let fixture: ComponentFixture<SelAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
