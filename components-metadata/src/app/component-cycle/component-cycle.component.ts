import { Component, OnInit, OnDestroy, OnChanges,
   DoCheck,AfterViewInit,AfterContentInit, Input, ViewChildren, ContentChild } from '@angular/core';

@Component({
  selector: 'app-component-cycle',
  templateUrl: './component-cycle.component.html',
  styleUrls: ['./component-cycle.component.css']
})
export class ComponentCycleComponent implements OnInit, OnDestroy, OnChanges,DoCheck,AfterViewInit,AfterContentInit {
  @Input() title:string;
  @ViewChildren("myRef") paragraph:HTMLElement;
  @ContentChild("RootElement")  button:HTMLElement;

  constructor() { }

  ngOnInit() {
    console.log("onInit ",2);
  }

  ngOnDestroy(){
    console.log("onDestroy ", 6);
  }

  ngOnChanges(){
    console.log("onChanges", 1);
  }

  ngDoCheck(){
    console.log("DoCheck", 3);
  }

  ngAfterContentInit(){
    console.log("AfterContentInit", 4,this.button);
  }

  ngAfterViewInit(){
    console.log("ViewInit", 5,this.button);

  }
}
