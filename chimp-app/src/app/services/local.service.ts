import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Article, TestLocation } from "../models/index";


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
  public getInventoryArticleJSON(): Observable < Article[] > {
    return this._httpClient.get(this.localArticles).pipe(
      map(res => { return <Article[] > res }));
  }
  public getLocationsFromState(state: string): Observable < TestLocation[] > {
  	let locationUri = environment.findTestCenterUrl.replace(":state", state.toLowerCase());
    return this._httpClient.get(locationUri).pipe(
      map(res => { return <TestLocation[]> res }));
  }
}
