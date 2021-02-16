import { Component, OnInit ,Output,EventEmitter,Input,NgModule} from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()  name: string;
  @Output() voted = new EventEmitter<any>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
  @Input()  styles: string;
  value:string="String";
  
  @Output() something = new EventEmitter<any>();
  set2(x:any){
this.something.emit(x);
console.log('emit'+x);

  }
  click(e){

    console.log("xxxxx"+e)
  }
  one
  constructor() { }

  ngOnInit(): void {

  }

}
