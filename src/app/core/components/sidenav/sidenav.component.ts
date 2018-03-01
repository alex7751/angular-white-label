import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <h1>Sidenav</h1>
    <ng-content></ng-content>
  `,
  styles: []
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
