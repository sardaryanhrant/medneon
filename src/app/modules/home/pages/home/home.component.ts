import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../../components/register/register.component';
import { QuestionComponent } from '../../components/question/question.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.dialog.open(QuestionComponent, {});
    }, 10000);
  }

  openDialog() {
    this.dialog.open(RegisterComponent, {});
  }

}
