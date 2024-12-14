import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappIconoComponent } from './whatsapp-icono.component';

describe('WhatsappIconoComponent', () => {
  let component: WhatsappIconoComponent;
  let fixture: ComponentFixture<WhatsappIconoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatsappIconoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappIconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
