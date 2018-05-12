import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { QuestionBankComponent } from './pages/question-bank/question-bank.component';
import { AppRoutingModule } from './pages/app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestimonialsComponent,
    QuestionBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
