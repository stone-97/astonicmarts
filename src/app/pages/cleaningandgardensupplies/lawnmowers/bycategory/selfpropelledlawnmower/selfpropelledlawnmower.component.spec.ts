import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfpropelledlawnmowerComponent } from './selfpropelledlawnmower.component';

describe('SelfpropelledComponent', () => {
  let component: SelfpropelledlawnmowerComponent;
  let fixture: ComponentFixture<SelfpropelledlawnmowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfpropelledlawnmowerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelfpropelledlawnmowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
