import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGen } from '../form-gen';
import { FormGeneratorService } from '../form-generator.service';
import { VisiblityPipe } from '../visiblity.pipe';

@Component({
  selector: 'sf-form-preview',
  templateUrl: './form-preview.component.html',
  styles: [` .rowSpace{
    padding-bottom: 10px;
}`]
})
export class FormPreviewComponent implements OnInit {
  specification: FormGen[] = [];
  constructor(private formGenerator: FormGeneratorService) {
    this.specification = this.formGenerator.getData();
  }

  ngOnInit() {
  }

}
