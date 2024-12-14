import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPiedraCuarzoComponent } from './tipos-piedra-cuarzo.component';

describe('TiposPiedraCuarzoComponent', () => {
  let component: TiposPiedraCuarzoComponent;
  let fixture: ComponentFixture<TiposPiedraCuarzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposPiedraCuarzoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposPiedraCuarzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
