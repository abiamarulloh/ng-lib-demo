import { Component } from '@angular/core';

@Component({
  selector: 'ld-root',
  template: `
    <ts-poster [showId]="336"></ts-poster>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lib-demo';
}
