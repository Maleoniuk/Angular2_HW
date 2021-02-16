import { Component, OnInit,ViewChild } from '@angular/core';

import { AddComponent } from './add/add.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'row';
 
x;

  @ViewChild(AddComponent)
  childComponent:AddComponent
 Method() {
    this.childComponent.delete(this.x)
 
 }




  constructor(){}
 
  
  
    ngOnInit() {
  
  
  
     
    
   
  
    }
  
  
  }
  
