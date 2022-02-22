import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  login():void{
    this.auth.login();
    // location.replace("https://www.bungie.net/en/OAuth/Authorize?client_id=39412&response_type=code")
  }

}
