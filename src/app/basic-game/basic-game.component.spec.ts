import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGameComponent } from './basic-game.component';

describe('BasicGameComponent', () => {
  let component: BasicGameComponent;
  let fixture: ComponentFixture<BasicGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
