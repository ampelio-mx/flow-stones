import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposCorteComponent } from './tipos-corte.component';

describe('TiposCorteComponent', () => {
  let component: TiposCorteComponent;
  let fixture: ComponentFixture<TiposCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposCorteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
