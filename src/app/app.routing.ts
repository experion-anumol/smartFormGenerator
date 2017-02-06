import {Routes,RouterModule} from '@angular/router';
import {FormGeneratorComponent} from './form-generator/form-generator.component';
import {FormPreviewComponent} from './form-preview/form-preview.component';

const APP_ROUTES:Routes=[
    {path: '',component:FormGeneratorComponent},
    {path: 'view',component:FormPreviewComponent}
];
export const routing=RouterModule.forRoot(APP_ROUTES);