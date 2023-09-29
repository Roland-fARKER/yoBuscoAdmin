import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataUsersComponent } from './edit-data-users.component';

describe('EditDataUsersComponent', () => {
  let component: EditDataUsersComponent;
  let fixture: ComponentFixture<EditDataUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDataUsersComponent]
    });
    fixture = TestBed.createComponent(EditDataUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
