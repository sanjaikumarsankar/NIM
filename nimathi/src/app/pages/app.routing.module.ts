import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { QuestionBankComponent } from "./question-bank/question-bank.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'question-bank', component: QuestionBankComponent },
    { path: 'testimonials', component: TestimonialsComponent }
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }