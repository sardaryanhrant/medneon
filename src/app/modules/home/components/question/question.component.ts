import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  messages: FormGroup;
  closeBlock: boolean = true;
  constructor() { }

  ngOnInit() {
    this.messages = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('')
    });
  }
  close(){
    this.closeBlock = !this.closeBlock;    
  }
  sendmessage(n){
    console.log(n);    
  }
}
