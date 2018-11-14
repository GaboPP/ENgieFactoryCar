import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GautosComponent } from './gautos.component';

describe('GautosComponent', () => {
  let component: GautosComponent;
  let fixture: ComponentFixture<GautosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GautosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GautosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
