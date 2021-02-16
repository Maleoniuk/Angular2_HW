import { Directive,Input,HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[rows]' //ng g d direct; создаем селектор-параметр rows <my-table rows>
})
export class DirectDirective {

  constructor(private el: ElementRef ){
         
   
}

@Input() rows:string; //1)Тут все сложно. Я так поняла, что мы передаем параметр rows в @Input

@HostListener('window:load') onLoad(){ //3 Специальная вещь которая доводит это все до ума.('window:load')-это загрузка страницы 
  this.getNumber(this.rows); //вызываем там эту функцию. (this.rows) наш x который проходит весь путь от html до direct и обратно
 
}
public getNumber(x){ //2)Получаем номер х со значения rows =>rows=x

let td=document.querySelectorAll('td'); //Собираем в переменную td
let button=document.querySelectorAll('button'); //Собираем в переменную button
 console.log(x);
 console.log('td '+td[x]);
 let i;
for(i=0;i<x ;i++){
  td[i].style.visibility='visible';  //button и td у нас изначально hidden,
  button[i].style.visibility='visible'; //через цикл до цифры x меняем стиль на visible в td и button
  console.log('button '+button[x]);//до индекса x
}

}


}
