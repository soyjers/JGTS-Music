import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasGrillaPrincipalComponent } from './artistas-grilla-principal.component';

describe('ArtistasGrillaPrincipalComponent', () => {
  let component: ArtistasGrillaPrincipalComponent;
  let fixture: ComponentFixture<ArtistasGrillaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistasGrillaPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistasGrillaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
