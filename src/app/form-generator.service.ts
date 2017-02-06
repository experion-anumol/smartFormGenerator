import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGen } from './form-gen';

@Injectable()
export class FormGeneratorService {

  specification: FormGen[] = [];
  
  pushData(formData: FormGen, index) {
    this.specification[index] = formData;
  }

  getData() {
    return this.specification;
  }

  constructor() { }

}
