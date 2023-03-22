import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercButtonOutstandingComponent } from './merc-button-outstanding.component';
import { MercButtonOutstandingModule } from './merc-button-outstanding.module';

describe('MercButtonOutstandingComponent', () => {
  let component: MercButtonOutstandingComponent;
  let fixture: ComponentFixture<MercButtonOutstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MercButtonOutstandingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercButtonOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
