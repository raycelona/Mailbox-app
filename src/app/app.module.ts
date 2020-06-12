import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MailBodyComponent } from './mail-body/mail-body.component';
import { MailPreviewComponent } from './mail-preview/mail-preview.component';
import { MailItemComponent } from './mailbox/mail-item/mail-item.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ComposeComponent } from './compose/compose.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    MailBodyComponent,
    MailPreviewComponent,
    MailItemComponent,
    SignUpComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
