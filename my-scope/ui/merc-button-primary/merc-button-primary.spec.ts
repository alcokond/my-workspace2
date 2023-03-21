import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercButtonPrimaryComponent } from './merc-button-primary.component';
import { MercButtonPrimaryModule } from './merc-button-primary.module';

describe('MercButtonPrimaryComponent', () => {
  let component: MercButtonPrimaryComponent;
  let fixture: ComponentFixture<MercButtonPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MercButtonPrimaryModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercButtonPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
