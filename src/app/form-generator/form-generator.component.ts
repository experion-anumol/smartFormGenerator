import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGen } from '../form-gen';
import { Router } from '@angular/router';


import { FormGeneratorService } from '../form-generator.service';

@Component({
    selector: 'sf-form-generator',
    templateUrl: './form-generator.component.html',
    styles: [` .submitBtn{
    text-align: center;
  }`]
})
export class FormGeneratorComponent implements OnInit {
    @Output() passFormSpec = new EventEmitter<FormGen>();
    orders: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    fields: String[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    tempArray: Number[] = [];
    status: Number = 0;
    index: Number;
    constructor(private formGenerator: FormGeneratorService, private router: Router) { }

    ngOnInit() {
    }
    orderChange(i) {
        if (this.tempArray.indexOf(i) != -1) {
            alert("Enter a unique order");
        }
        else {
            this.tempArray.push(i);
        }
    }
    onSubmit(f) {
        for (let i in this.fields) {
            this.index = f[i].order - 1;
            this.formGenerator.pushData(new FormGen(f[i].label, f[i].controlType, f[i].isVisible, f[i].isReadOnly), this.index);
        }
        this.router.navigate(['/view']);
    }
}
