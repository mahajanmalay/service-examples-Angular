import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  template:`<h1>Check Whether 5 is Prime number : {{str}}</h1>
  <h1>The Capital letters in string "lsASdLXvBHLso" are : {{Count}} </h1> `
})
export class ChildComponent implements OnInit {

  public num:number=5;
  public isPrime:boolean=false;
  public str:string="";

  public Count:number=0;
  public str2 : string = "lsASdLXvBHLso";

  constructor(private _obj : NumberService, private _obj2 : StringService) { }

  ngOnInit(): void
  {
    this.isPrime = this._obj.ChkPrime(this.num);
    if(this.isPrime)
    {
      this.str="The number is Prime";
    }
    else
    {
      this.str="The number is not Prime";
    }
    this.Count = this._obj2.CountCapital(this.str2);
  }

}


