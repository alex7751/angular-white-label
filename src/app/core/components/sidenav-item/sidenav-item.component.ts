import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  template: `
    <p>
      sidenav-item works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
