import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandpushlawnmowersComponent } from './handpushlawnmowers.component';

describe('HandpushComponent', () => {
  let component: HandpushlawnmowersComponent;
  let fixture: ComponentFixture<HandpushlawnmowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandpushlawnmowersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HandpushlawnmowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
