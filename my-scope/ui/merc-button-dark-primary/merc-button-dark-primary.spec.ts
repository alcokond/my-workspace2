import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercButtonDarkPrimaryComponent } from './merc-button-dark-primary.component';
import { MercButtonDarkPrimaryModule } from './merc-button-dark-primary.module';

describe('MercButtonDarkPrimaryComponent', () => {
  let component: MercButtonDarkPrimaryComponent;
  let fixture: ComponentFixture<MercButtonDarkPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MercButtonDarkPrimaryModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercButtonDarkPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
