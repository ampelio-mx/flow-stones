import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTiposPiedrasComponent } from './card-tipos-piedras.component';

describe('CardTiposPiedrasComponent', () => {
  let component: CardTiposPiedrasComponent;
  let fixture: ComponentFixture<CardTiposPiedrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTiposPiedrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTiposPiedrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
