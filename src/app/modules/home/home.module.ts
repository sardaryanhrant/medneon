import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomeComponent} from './pages/home/home.component';
import { HomeRoutingModule} from './home-routing.module';
import { QuestionComponent } from './components/question/question.component';
import { RegisterComponent } from './components/register/register.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';


@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    HomeRoutingModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    FlexLayoutModule,
    MatInputModule,
  ],
  declarations: [HomeComponent, QuestionComponent, RegisterComponent],
  entryComponents: [RegisterComponent, QuestionComponent],
})
export class HomeModule {
}
