import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsersComponent } from './editar-users.component';

describe('EditarUsersComponent', () => {
  let component: EditarUsersComponent;
  let fixture: ComponentFixture<EditarUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
