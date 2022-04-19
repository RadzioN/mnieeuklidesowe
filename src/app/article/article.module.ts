import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { SharedModule } from '../shared';
import { ArticleRoutingModule } from './article-routing.module';
import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
    imports: [
        SharedModule,
        ArticleRoutingModule,
        DragScrollModule
    ],
    declarations: [
        ArticleComponent
    ]
})
export class ArticleModule { }