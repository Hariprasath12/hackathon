import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api:ApiService) { }
  id: String;
  private sub: any;
data:any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['name']; // (+) converts string 'id' to a number
// console.log(this.id)
      // In a real app: dispatch action to load the details here.
   });
   this.api.getsingleplayerdata(this.id).subscribe(data=>{
    this.data=data.json();
    console.log(this.data)
    this.data=this.data[0];
    //convert rating into 5
   
     this.data.Rating=this.data.Rating/20;
    
    
  })

  }

}
