import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, CanActivate } from "@angular/router";
import {
  LandingPageComponent,
  AboutPageComponent,
  ArticlePageComponent,
  TestCenterPageComponent,
  ErrorPageComponent,
} from "../pages/index";

const routes: Routes = [{
    path: "",
    component: LandingPageComponent,
    data: { title: "Landing Page" },
  },
  {
    path: "about",
    component: AboutPageComponent,
    data: { title: "Landing Page" },
  },
  {
    path: "article",
    component: ArticlePageComponent,
    data: { title: "Landing Page" },
  },
  {
    path: "test-center",
    component: TestCenterPageComponent,
    data: { title: "Landing Page" },
  },
  {
    path: "**",
    component: ErrorPageComponent,
    data: { title: "Landing Page" },
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule],
  declarations: [
    LandingPageComponent,
    AboutPageComponent,
    ArticlePageComponent,
    TestCenterPageComponent,
    ErrorPageComponent,
  ],
})
export class PagesModule {}
