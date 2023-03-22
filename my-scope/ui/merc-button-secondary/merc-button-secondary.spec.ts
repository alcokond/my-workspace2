import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercButtonSecondaryComponent } from './merc-button-secondary.component';
import { MercButtonSecondaryModule } from './merc-button-secondary.module';

describe('MercButtonSecondaryComponent', () => {
  let component: MercButtonSecondaryComponent;
  let fixture: ComponentFixture<MercButtonSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MercButtonSecondaryModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercButtonSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
