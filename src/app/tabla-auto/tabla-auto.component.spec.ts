import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAutoComponent } from './tabla-auto.component';

describe('TablaAutoComponent', () => {
  let component: TablaAutoComponent;
  let fixture: ComponentFixture<TablaAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
