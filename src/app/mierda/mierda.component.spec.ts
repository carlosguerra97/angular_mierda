import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MierdaComponent } from './mierda.component';

describe('MierdaComponent', () => {
  let component: MierdaComponent;
  let fixture: ComponentFixture<MierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
