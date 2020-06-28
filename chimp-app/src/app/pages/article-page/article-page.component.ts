import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LocalService } from "../../services/index";
import { Article } from "../../models/index";

@Component({
  selector: "app-article-page",
  templateUrl: "./article-page.component.html",
  styleUrls: ["./article-page.component.scss"],
})
export class ArticlePageComponent implements OnInit {
  public article: Article = <Article>{};

	constructor(
		private localService: LocalService,
		private activatedRoute: ActivatedRoute
	) {}

	async ngOnInit() {
		const fullRoute = this.activatedRoute.snapshot["_routerState"].url;
		if (fullRoute) {
			const aId = fullRoute.split("/").pop();
			try {
				this.article = await this.processArticleResponse(Number(aId));
			} catch (err) {
				console.error(err);
			}
		}
		console.log(this.article);
	}

	/**
	 * Finds a Article from the Article json file
	 * @param  {number}				ArticleId id we are looking for
	 * @return {Promise<Article>}	a promise with the Article in it
	 */
	processArticleResponse(id: number): Promise<Article> {
		return new Promise<Article>((resolve, reject) => {
			this.localService
				.getInventoryArticleJSON()
				.subscribe((articles) => {
					if (articles && articles.length > 0) {
						const article = articles.find((r) => r.id === id);
						if (article) {
							resolve(article);
						} else {
							reject(`${id} not found in JSON`);
						}
					} else {
						reject("JSON no found");
					}
				});
		});
	}
}
