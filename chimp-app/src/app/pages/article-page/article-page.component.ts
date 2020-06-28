import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/index';
import { Article } from '../../models/index';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

	public article: Article = <Article>{};

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
  }

}
