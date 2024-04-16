import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {SgrafService} from "../../sgraf.service";


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
export class MessComponent implements OnInit{
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
  showError:boolean = false;




  UpDateName(Name:string, IDm:number){
    this.MesName=Name
    this.IDname = IDm
    this.showForm = true;
  }
  constructor(private fb: FormBuilder,private service: SgrafService) {}

  ngOnInit() {

    this.myForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  addMess(form: FormGroup) {



        // @ts-ignore
        this.messages[this.IDname] = form;
        this.showForm = false;
        this.service.SendDataPOST(form).subscribe((res) => {});
        //console.log(
       //this.service.GetServerData().subscribe(data => { }));

  }




  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Message', form.value.message);
    this.addMess(form.value.message)
  }
}
