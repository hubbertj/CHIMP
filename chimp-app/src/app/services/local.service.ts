import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { Article } from "../models/index";


@Injectable({
	providedIn: "root",
})
export class LocalService {
	private localArticles: string = "../../assets/article-content/content.json";
	constructor(private _httpClient: HttpClient) {}

	/**
	 * Get the local json data for articles.
	 * @return {Observable}
	 */
	    public getInventoryArticleJSON(): Observable<Article[]> {
            return this._httpClient.get(this.localArticles).pipe(
                    map(res => {return <Article[]> res}));

    }
}
