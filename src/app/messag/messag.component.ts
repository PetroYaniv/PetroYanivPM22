import { Component , OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule,
  NgIf,
  NgFor,
  UpperCasePipe} from '@angular/common';
import {MessComponent} from "./mess/mess.component";


@Component({
  selector: 'app-messag',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    MessComponent
  ],
  templateUrl: './messag.component.html',
  styleUrl: './messag.component.scss'
})
export class MessagComponent implements OnInit{
  myForm: FormGroup | any;
  IDname: any;
  OnlineURL:string="";
  messages=[];
  showForm: boolean=false;
  mass=[
    {
      name: "James Bond",
      time: "01:23 AM",
      text:"Like my new Portfolio",
      IconURL:"assets/img/variant-26-253.png",
    }  ,
    {
      name: "Andi Susanto",
      time: "06:33 AM",
      text:"I have sing a song",
      IconURL:"assets/img/variant-26-261.png",
    },
    {
      name: "Muing Siswoyo",
      time: "04:10 PM",
      text:"Just Design new Dribbble",
      IconURL:"assets/img/variant-26-269.png",
    },
    {
      name:"There`s new comment for you",
      time: "11:23 AM",
      text:"I have sing a song",
      IconURL:"assets/img/variant-26-277.png",
    }
  ]

  UpDateName(Name:string, IDm:number){
    this.IDname = IDm
    this.showForm = true;
  }
  constructor(private fb: FormBuilder) {}

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
