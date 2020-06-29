import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from "../../services/index";
import { Article } from "../../models/index";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public searchForm: FormGroup;
  public submitted = false;
  public articles: Article[] = [];


  constructor(private formBuilder: FormBuilder, private localService: LocalService) {}

  async ngOnInit() {
    this.searchForm = this.formBuilder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required]
    });

    try {
      this.articles = await this.processArticleResponse();
    } catch (err) {
      console.error(err);
    }
  }

  get f() { return this.searchForm.controls; }

  /**
   * Finds a Article from the Article json file
   * @param  {number}				ArticleId id we are looking for
   * @return {Promise<Article>}	a promise with the Article in it
   */
  processArticleResponse(): Promise <Article[]> {
    return new Promise <Article[]> ((resolve, reject) => {
      this.localService
        .getInventoryArticleJSON()
        .subscribe((articles) => {
          if (articles && articles.length > 0) {
            resolve(articles);
          } else {
            reject(`json not found in JSON`);
          }
        });
    });
  }


  /**
   * Search submit
   */
  onSearch(): void {
    console.log("ere");
    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }

  }

}
