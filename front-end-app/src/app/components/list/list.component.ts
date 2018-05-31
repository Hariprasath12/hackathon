import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [NgbRatingConfig] 
})
export class ListComponent implements OnInit {

  constructor(private api:ApiService,config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }
data:any;
  ngOnInit() {
    this.api.getallplayersdata().subscribe(data=>{
      this.data=data.json();
      //convert rating into 5
      for(let a in this.data){
       this.data[a].Rating=this.data[a].Rating/20;
      }
      // console.log(data)
    })
  }

}
