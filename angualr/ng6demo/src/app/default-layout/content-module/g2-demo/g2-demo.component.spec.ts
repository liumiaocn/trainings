import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2DemoComponent } from './g2-demo.component';

describe('G2DemoComponent', () => {
  let component: G2DemoComponent;
  let fixture: ComponentFixture<G2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
