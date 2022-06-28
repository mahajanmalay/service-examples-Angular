import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService
{
  public uppercase:number=0;
  public cnt:number=0;
  public str1:string="";
  public CountCapital(str0:string):any
  {
    this.str1=str0;
    for(this.cnt=0;this.cnt<this.str1.length;this.cnt++)
    {
      if(this.str1[this.cnt]>='A' && this.str1[this.cnt]<='Z')
      {
        this.cnt++;
      }
    }
    return this.cnt;
  }

  constructor() { }
}
