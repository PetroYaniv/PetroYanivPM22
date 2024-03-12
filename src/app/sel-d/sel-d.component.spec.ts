import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelDComponent } from './sel-d.component';

describe('SelDComponent', () => {
  let component: SelDComponent;
  let fixture: ComponentFixture<SelDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
