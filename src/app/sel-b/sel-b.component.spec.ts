import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelBComponent } from './sel-b.component';

describe('SelBComponent', () => {
  let component: SelBComponent;
  let fixture: ComponentFixture<SelBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
