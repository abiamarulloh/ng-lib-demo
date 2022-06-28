import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ts-poster',
  template: `
    {{showId}}
  `,
})
export class PosterComponent implements OnInit {
  @Input() showId!: number;

  ngOnInit() {
    console.log(this.showId)
  }
}
