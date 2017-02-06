import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import {FormGeneratorService} from './form-generator.service';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { VisiblityPipe } from './visiblity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormGeneratorComponent,
    FormPreviewComponent,
    VisiblityPipe
  ],
  imports: [routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FormGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
