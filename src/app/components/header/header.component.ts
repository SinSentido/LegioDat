import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateLogin(){
    this.loginButton = !this.loginButton;
  }

}
