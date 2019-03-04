import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxmComponentsComponent } from './txm-components.component';

describe('TxmComponentsComponent', () => {
  let component: TxmComponentsComponent;
  let fixture: ComponentFixture<TxmComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxmComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxmComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
