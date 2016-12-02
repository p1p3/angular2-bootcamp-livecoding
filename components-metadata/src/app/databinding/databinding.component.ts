import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles:[`
          .simple{
            color: blue;
          }
        `]
})
export class DatabindingComponent implements OnInit {
  stringInterpolation = "This is string interpolation";
  numberInterpolation = 2;

  model = {
    name:"felipe"
  };
  
  constructor() { }

  ngOnInit() {
  }

  public evaluateThis():string{
    return "Worked";
  }


  public shouldUseSimpleClass():boolean{
    return true;
  }

  public onClick():void{
    console.log("onClick");
  }
}
