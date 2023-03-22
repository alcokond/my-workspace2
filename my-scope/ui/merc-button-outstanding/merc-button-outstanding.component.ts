import { Component, Input } from '@angular/core';

@Component({
  selector: 'merc-button-outstanding',
  template: `
    <button [ngStyle]="getStyles()" [disabled]="disabled">
      <!-- <ng-container *ngIf="iconLeft">
        
      </ng-container> -->
      {{ label }}
      <!-- <ng-container *ngIf="iconRight">
        
      </ng-container> -->
    </button>
  `,
  styleUrls: ['./merc-button-outstanding.component.scss'],
})
export class MercButtonOutstandingComponent {
  @Input() label: string = 'Button';
  @Input() iconLeft: string | null = null;
  @Input() iconRight: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() disabled: boolean = false;

  
  
  getStyles() {
    const styles = {
      'min-width': '145px',
      'min-height': '32px',
      'font-size': '14px',
      'line-height': '17px'
    };
    
    if (this.size === 'medium') {
      styles['min-width'] = '158px';
      styles['min-height'] = '48px';
      styles['font-size'] = '16px';
      styles['line-height'] = '20px';

    } else if (this.size === 'large') {
      styles['min-width'] = '249px';
      styles['min-height'] = '64px';
      styles['font-size'] = '20px';
      styles['line-height'] = '24px';
    }
    return styles;
  }
}

