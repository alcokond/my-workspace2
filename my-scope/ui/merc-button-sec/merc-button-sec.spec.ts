import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercButtonSecComponent } from './merc-button-sec.component';
import { MercButtonSecModule } from './merc-button-sec.module';

describe('MercButtonSecComponent', () => {
  let component: MercButtonSecComponent;
  let fixture: ComponentFixture<MercButtonSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MercButtonSecModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercButtonSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
