import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPiedrasComponent } from './tipos-piedras.component';

describe('TiposPiedrasComponent', () => {
  let component: TiposPiedrasComponent;
  let fixture: ComponentFixture<TiposPiedrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposPiedrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposPiedrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
