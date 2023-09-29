import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grap1Component } from './grap1.component';

describe('Grap1Component', () => {
  let component: Grap1Component;
  let fixture: ComponentFixture<Grap1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grap1Component]
    });
    fixture = TestBed.createComponent(Grap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
