import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarUsersComponent } from './borrar-users.component';

describe('BorrarUsersComponent', () => {
  let component: BorrarUsersComponent;
  let fixture: ComponentFixture<BorrarUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
