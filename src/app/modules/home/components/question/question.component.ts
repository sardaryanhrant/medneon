import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {

}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  messages: FormGroup;
  closeBlock: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<QuestionComponent>,
  ) { }

  ngOnInit() {
    this.messages = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('')
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  sendmessage(n){
    console.log(n);    
  }
}
