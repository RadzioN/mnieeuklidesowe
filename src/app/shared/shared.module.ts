import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Import wszystkich składników Angular Material
import { DemoMaterialModule } from './layout';
import { CardComponent } from './components';
import { ColorFirstLetter, ToObjectPipe } from './pipes';
import { HelpComponent } from './components/help';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        DemoMaterialModule,
    ],
    declarations: [
        CardComponent,
        HelpComponent,
        ColorFirstLetter,
        ToObjectPipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        DemoMaterialModule,
        HelpComponent,
        CardComponent,
        ColorFirstLetter,
        ToObjectPipe
    ]
})
export class SharedModule { }