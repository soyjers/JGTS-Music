import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasZoomComponent } from './artistas-zoom.component';

describe('ArtistasZoomComponent', () => {
  let component: ArtistasZoomComponent;
  let fixture: ComponentFixture<ArtistasZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistasZoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistasZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});