import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:Http) { }

  getallplayersdata(){
  
  return this.http.get('http://localhost:3000/data')
    
  
}
getsingleplayerdata(name){
  name=encodeURI(name);
  let url='http://localhost:3000/data/name/'+name;
  console.log(url)
  return this.http.get(url)
    
  
}
}
