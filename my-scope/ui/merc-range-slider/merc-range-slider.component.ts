import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'merc-range-slider',
  templateUrl: './merc-range-slider.component.html',
  styleUrls: ['./merc-range-slider.component.scss'],
})
export class MercRangeSliderComponent implements OnInit {
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('valueBubble') valueBubble!: ElementRef;
  @ViewChild('rangeInput') rangeInput!: ElementRef;
// ...

  selectedValue: number = this.minValue;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event: MouseEvent) => {
      if (!this.rangeInput.nativeElement.contains(event.target)) {
        this.hideValueBubble();
      }
    });
  }

  onInputChange(event: any): void {
    this.selectedValue = event.target.value;
    this.valueChange.emit(this.selectedValue);
    this.updateValueBubblePosition(event);
  }

  updateValueBubblePosition(event: any): void {
    const inputWidth = event.target.offsetWidth;
    const min = this.minValue;
    const max = this.maxValue;
    const percent = ((this.selectedValue - min) / (max - min)) * 100;
  
    // Update the track color by setting the --thumb-percent CSS variable
    this.renderer.setStyle(
      this.rangeInput.nativeElement,
      '--thumb-percent',
      `${percent}%`
    );
  
    this.valueBubble.nativeElement.style.left = `calc(${percent}% - (${16}px * ${percent * 0.01}))`;
  }

  showValueBubble(): void {
    this.valueBubble.nativeElement.style.display = 'block';
  }

  hideValueBubble(): void {
    this.valueBubble.nativeElement.style.display = 'none';
  }

  getPercentage(): number {
    return ((this.selectedValue - this.minValue) / (this.maxValue - this.minValue)) * 100;
  }
  
}