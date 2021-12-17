import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NelilaskinComponent } from './nelilaskin/nelilaskin.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PalauteSivuComponent } from './palaute-sivu/palaute-sivu.component';
import { ReititysComponent } from './reititys/reititys.component';
import { PalveluComponent } from './palvelu/palvelu.component';
import { RajapintahakuComponent } from './rajapintahaku/rajapintahaku.component';
import { HakukenttaComponent } from './hakukentta/hakukentta.component';
import { AdminreititysComponent } from './adminreititys/adminreititys.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NelilaskinComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    PalauteSivuComponent,
    ReititysComponent,
    PalveluComponent,
    RajapintahakuComponent,
    HakukenttaComponent,
    AdminreititysComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
