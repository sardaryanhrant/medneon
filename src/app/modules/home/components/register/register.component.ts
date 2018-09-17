import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {

}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selected = 'option2';
  public closeBlock: boolean = true;
  registerform:FormGroup;
  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<RegisterComponent>,
  ) { }

  ngOnInit() {
    this.registerform = new FormGroup({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      zipCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  sendForm(form){
    if(this.registerform.valid){
      console.log(form.value);
    }else{}
    
  }
}
