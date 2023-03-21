import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercRangeSliderComponent } from './merc-range-slider.component';
import { MercRangeSliderModule } from './merc-range-slider.module';

describe('MercRangeSliderComponent', () => {
  let component: MercRangeSliderComponent;
  let fixture: ComponentFixture<MercRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MercRangeSliderModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
