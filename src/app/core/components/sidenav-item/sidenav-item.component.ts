import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  template: `
  <a mat-list-item [routerLink]="routerLink" (click)="navigate.emit()">
    <mat-icon mat-list-icon>{{ icon }}</mat-icon>
    <span mat-line><ng-content></ng-content></span>
    <span mat-line class="secondary">{{ hint }}</span>
  </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent {
  @Input() icon = '';
  @Input() hint = '';
  @Input() routerLink: string | any[] = '/';
  @Output() navigate = new EventEmitter();
}
