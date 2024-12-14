import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPiedrasGranitoComponent } from './tipos-piedras-granito.component';

describe('TiposPiedrasGranitoComponent', () => {
  let component: TiposPiedrasGranitoComponent;
  let fixture: ComponentFixture<TiposPiedrasGranitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposPiedrasGranitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposPiedrasGranitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
