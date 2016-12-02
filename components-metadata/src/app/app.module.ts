import { ComponentBasicsModule } from './component-basics/component-basics.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ComponentCycleComponent } from './component-cycle/component-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    ComponentCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentBasicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
