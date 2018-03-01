import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <mat-sidenav-container fullscreen>
    <ng-content></ng-content>
  </mat-sidenav-container>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
