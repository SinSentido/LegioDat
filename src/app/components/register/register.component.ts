import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  step1: boolean = true;
  step2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateStep2(){
    this.step1 = false;
    this.step2 = true;
  }
}
