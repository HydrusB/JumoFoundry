import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  showEd = false;

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code')
    console.log(code)
  }
  FetchSong():void{
    location.replace("https://www.bungie.net/en/OAuth/Authorize?client_id=39412&response_type=code")
  }

}
