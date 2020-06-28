import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF,CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { ScullyLibModule } from "@scullyio/ng-lib";

import { HeaderComponent, FooterComponent } from "./components/index";

// Modules
import { PagesModule } from "./modules/index";

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	schemas: [NO_ERRORS_SCHEMA],
	imports: [
		CommonModule,
		BrowserModule,
		PagesModule,
		AppRoutingModule,
		ScullyLibModule,
	],
	providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
	bootstrap: [AppComponent],
})
export class AppModule {}