import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  showEd = false;

  ngOnInit(): void {
  }
  FetchSong():void{
    location.replace("https://www.bungie.net/en/OAuth/Authorize?client_id=39412&response_type=code")
  }

}
