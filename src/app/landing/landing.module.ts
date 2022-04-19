import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared';
import { LandingRoutingModule } from './landing-routing.module';
import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
    imports: [
        SharedModule,
        LandingRoutingModule,
        DragScrollModule
    ],
    declarations: [
        LandingComponent
    ]
})
export class LandingModule { }