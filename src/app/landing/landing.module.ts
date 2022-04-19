import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
    imports: [
        SharedModule,
        LandingRoutingModule
    ],
    declarations: [
        LandingComponent
    ]
})
export class LandingModule { }