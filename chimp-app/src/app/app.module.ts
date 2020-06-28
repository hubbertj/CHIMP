import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { ScullyLibModule } from "@scullyio/ng-lib";

import { HeaderComponent, FooterComponent } from "./component/index";

// Modules
import { PagesModule } from "./modules/index";

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
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