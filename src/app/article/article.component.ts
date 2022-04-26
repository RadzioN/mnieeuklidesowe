import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../core';
import { Article } from '../shared';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  articleData!: Article[];
  code: string = "";

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let code = params['articlecode'];
      this.code = params['articlecode'];
      if (JSON.parse(localStorage.getItem(`${code}-article`)!)) {
        this.articleData = JSON.parse(localStorage.getItem(`${code}-article`)!);
      } else {
        this.articleService.setArticleData(code).subscribe(data => {
          this.articleData = data;
        });
      }
    });
  }

}
