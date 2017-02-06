import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visiblity'
})
export class VisiblityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!==true)
    {
      value=true;
    }
    else{
      value=false;
    }
    return value;
  }

}
