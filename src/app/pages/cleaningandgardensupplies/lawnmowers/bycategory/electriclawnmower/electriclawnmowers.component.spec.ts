import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectriclawnmowerComponent } from './electriclawnmowers.component';

describe('ElectricComponent', () => {
  let component: ElectriclawnmowerComponent;
  let fixture: ComponentFixture<ElectriclawnmowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectriclawnmowerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ElectriclawnmowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
