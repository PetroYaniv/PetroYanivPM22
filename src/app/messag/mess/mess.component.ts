import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-mess',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './mess.component.html',
  styleUrl: '../messag.component.scss'
})
export class MessComponent {
  myForm: FormGroup | any;
  @Input() MesName="";
  @Input() Online!:boolean;
  OnlineURL=["assets/img/variant-26-278.png","assets/img/variant-26-271.png"];
  @Input() timeMess:string="";
  @Input() MessCont:string=""
  IDname: any;
  messages=[];
  @Input() showForm: boolean=false;
  @Input() IconUrl!: string;





  UpDateName(Name:string, IDm:number){
    this.MesName=Name
    this.IDname = IDm
    this.showForm = true;
  }
  constructor(private fb: FormBuilder) {


  }

  ngOnInit() {

    this.myForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
  addMess(newMess: string) {
    if (newMess) {

      // @ts-ignore
      this.messages[this.IDname] = newMess;
      this.showForm = false;

    }
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Message', form.value.message);
    this.addMess(form.value.message)
  }
}
