import { Component, Input } from '@angular/core';

@Component({
  selector: 'merc-button-primary',
  template: `
    <button [ngStyle]="getStyles()" [disabled]="disabled">
      <ng-container *ngIf="iconLeft">
        
      </ng-container>
      {{ label }}
      <ng-container *ngIf="iconRight">
        
      </ng-container>
    </button>
  `,
  styleUrls: ['./merc-button-primary.component.scss'],
})
export class MercButtonPrimaryComponent {
  @Input() label: string = 'Button';
  @Input() iconLeft: string | null = null;
  @Input() iconRight: string | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() disabled: boolean = false;

  getStyles() {
    const styles = {
      'min-width': '145px',
      'min-height': '32px',
    };
    if (this.size === 'medium') {
      styles['min-width'] = '158px';
      styles['min-height'] = '48px';
    } else if (this.size === 'large') {
      styles['min-width'] = '249px';
      styles['min-height'] = '64px';
    }
    return styles;
  }
}
