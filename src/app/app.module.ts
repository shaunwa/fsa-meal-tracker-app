import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { SmallXComponent } from './small-x/small-x.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    DropDownComponent,
    SmallXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
