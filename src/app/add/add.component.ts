import { Component, OnInit, NgModule,Input,Directive,HostListener, ElementRef} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Item} from '../items';



//***********ADD.COMPONENT

@Component({
   selector: 'my-table', //<my-table>
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ServiceService], //Создаем папку service с файлом service.service.ts для помещения туда функии  visibility_maker(x) (switch case)
  styles: []   //так как длинный код. Эта функция выполняет переключение стиля visibility при сортировки Category
    

})
export class AddComponent implements OnInit {
 
  constructor(private ms: ServiceService) { 

  }

products:Item[]= [{ id: 1, name : 'product 1', price : 100 }, //был создан интерфейс Item для массива
{ id: 2, name : 'product 2', price : 200 },
{ id: 3, name : 'product 3', price : 300 },
{ id: 4, name : 'product 4', price : 400 },
{ id: 5, name : 'product 5', price : 500 },
{ id: 6, name : 'product 6', price : 600 },
{ id: 7, name : 'product 7', price : 700 },
{ id: 8, name : 'product 8', price : 800 },
{ id: 9, name : 'product 9', price : 900 },
{ id: 10, name : 'product 10', price : 1000 }];
hidden={visibility:'hidden'}; //Изначально все <td> скрыты;(это еще со второго урока)

boolean:boolean[]=[]; //(со второго урока)//Пустой массив для *ngFor, в *ngOnInit будем пушить false столько сколько в массиве product
set(x){ //второй урок//Специальная функция
  for(let i=0; i<this.products.length;i++){
    x.push(true);
    console.log(x)
  }}
  delete(x){ //Второй урок//Функция для <button>
    if(this.boolean[x]){
  this.boolean[x]=!this.boolean[x];
  console.log(`you deleted product with id--`+this.products[x].id)
  
    }
    console.log(x)
  
  
  }
 //*****Таблица*****
 variable_s; //   variable_s -переменная в которой будет хранится event.target value
 get_event_target(x){ //которая попадает через эту функцию и вызывает this.get_styles(), в которой находится основная функция 
  this.variable_s=x   // visibility_maker() для переключения стиля visibility=hidden/visible
this.get_styles()
 }

 get_styles(){this.ms.visibility_maker(this.variable_s)} //visibility_maker() находится в service.servise.ts
 

 //*****Таблица*****
 

//***Задание 3 ****/
agreed = 0;
disagreed = 0;
voters = ['Narco', 'Celeritas', 'Bombasto'];

onVoted(agreed: boolean) {
  agreed ? this.agreed++ : this.disagreed++;
};
ss='black';
variable;

changess(x){
  let v=document.getElementsByTagName('p');
  console.log('hello'+''+x );
  v[0].style.color="red";
  let table=document.getElementsByTagName('table');
  table[0].style.backgroundColor="grey"
  v[0].innerHTML=x
  
}
ch(){
  let table=document.getElementsByTagName('table');
  table[0].style.backgroundColor="grey"
}

//***Задание 3 ****/


//****Выпадающий список с value *****/

style={                        
  value1:{visibility:'hidden'}, //Эти стили я создала изначально для выпадающего списка Category(в <select> как "Value(1,2,3)" ).
  value2:{visibility:'hidden'}, //При нажати на <select>value_1</select>, например, эти стили меняются в функции onChange(), которая ловит
  value3:{visibility:'hidden',}, // event.target.value как x.
  all_values:{visibility:'hidden'},
  
  }
  
value={     // пустой массив для второго варианта.Сюда будем пушить 
  value1:[],// products[i], чтоб было удобнее их сортировать 
  value2:[],
  value3:[],
}
set_value(x,y,z){   //функция для массива(объекта) value
  for(let i=0; i<5; i++){  //x,y,z это value.value1, value.value2, value.value3,
    x.push(this.products[i]) //value.value1=5 products[i] (первых 5 products[i])
  }
  for(let i=5; i<7; i++){ //value.value2= 2 products[i] (6,7 products[i])
    y.push(this.products[i])
  }
  for(let i=7; i<10; i++){ //value.value3= 3 products[i] (8,9,10 products[i])
    z.push(this.products[i])
  }
}

 onChange(x) {  //Функция для выпадающего списка
   this.style={   //Обнуляем стили 
  value1:{visibility:'hidden'},
 value2:{visibility:'hidden'},
 value3:{visibility:'hidden'},
  all_values:{visibility:'hidden'},
  }

this.style[x]={visibility:'visible'}// в x должно попасть одно из value. Делаем строку видимой
     console.log("value event==="+x); 
 }
 
 //****Выпадающий список с value *****/


  ngOnInit() {
   
    console.log('hello');

    let i;
    this.set(this.boolean);//со второго урока
    this.set_value(this.value.value1, this.value.value2, this.value.value3) //выпадающий список. Пушим products[i]
  



 

  }//ngOnInit

 
 
}

