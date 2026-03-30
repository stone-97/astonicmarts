import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterseperatorsComponent } from './waterseperators.component';

describe('WaterseperatorsComponent', () => {
  let component: WaterseperatorsComponent;
  let fixture: ComponentFixture<WaterseperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterseperatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterseperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
