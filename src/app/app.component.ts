import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Comments } from './classes/comments';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'printers';
  constructor(private _apiService: ApiService) {

  }
  lstcomments:Comments[];

  ngOnInit(){
    this._apiService.getcomments()
    .subscribe(
      data => 
      {
        this.lstcomments = data;
      }
    );
  }
}
