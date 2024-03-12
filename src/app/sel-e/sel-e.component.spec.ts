import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelEComponent } from './sel-e.component';

describe('SelEComponent', () => {
  let component: SelEComponent;
  let fixture: ComponentFixture<SelEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
