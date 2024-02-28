import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarArtistaComponent } from './agregar-artista.component';

describe('AgregarArtistaComponent', () => {
  let component: AgregarArtistaComponent;
  let fixture: ComponentFixture<AgregarArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarArtistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
