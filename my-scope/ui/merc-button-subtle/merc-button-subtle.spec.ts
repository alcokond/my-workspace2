import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercButtonSubtleComponent } from './merc-button-subtle.component';
import { MercButtonSubtleModule } from './merc-button-subtle.module';

describe('MercButtonSubtleComponent', () => {
  let component: MercButtonSubtleComponent;
  let fixture: ComponentFixture<MercButtonSubtleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MercButtonSubtleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercButtonSubtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
