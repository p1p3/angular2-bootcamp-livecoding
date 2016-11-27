import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'first-component',
  template: `
      <h1>This is our first component<h1>
  `,
  styles: [`
      h1{
        color:red;
      }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
