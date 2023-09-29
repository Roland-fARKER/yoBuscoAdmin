import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grap2Component } from './grap2.component';

describe('Grap2Component', () => {
  let component: Grap2Component;
  let fixture: ComponentFixture<Grap2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grap2Component]
    });
    fixture = TestBed.createComponent(Grap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
