import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBasicsComponent } from './component-basics.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { OtherComponentComponent } from './other-component/other-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentBasicsComponent, FirstComponentComponent, OtherComponentComponent],
  exports:[ComponentBasicsComponent]
})
export class ComponentBasicsModule { }
