import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";

import { MessageModule } from "./message/message.module";

import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { ErrorComponent } from './error/error.component';

import { AuthService } from './auth/auth.service';
import { ErrorService } from './error/error.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
      BrowserModule,
      routing,
      HttpModule,
      MessageModule
    ],
    providers: [
      AuthService,
      ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
