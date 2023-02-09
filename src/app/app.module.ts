import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NavbarComponent } from './util/navbar/navbar.component';
import { FooterComponent } from './util/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    SignupComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
