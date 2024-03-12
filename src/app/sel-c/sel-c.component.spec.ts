import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelCComponent } from './sel-c.component';

describe('SelCComponent', () => {
  let component: SelCComponent;
  let fixture: ComponentFixture<SelCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
