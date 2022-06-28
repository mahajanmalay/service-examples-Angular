import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  public num2:any;
  public i:any;
  public ChkPrime(a:any):any
  {
    this.num2=a;
    for(this.i=2;this.i<=this.num2/2;this.i++)
    {
      if(this.num2%this.i==0)
      {
        return false;
      }
      else
      {
        return true;
      }
    }
  }

  constructor() { }
}
