import { Injectable } from '@angular/core';

@Injectable({                   
  providedIn: 'root'
})
export class ServiceService {
  visibility_maker(x) {  //x это переменная variable_s, в которой лежит значение event.target.value
      let td=document.getElementsByTagName('td');  //собираем в переменныe все td и button
    let button=document.getElementsByTagName('button');
 
    switch(x){                              //передаем переменную x/variable_s/event.target.value
    case  'Category 1':
      let a
      for(a=0; a<10; a++){      //Обновляем изначальный стиль
        td[a].style.visibility="visible";     
        button[a].style.visibility='visible';
        }
        for(a=5; a<7; a++){          //Для Category 2,3 делаем visibility='hidden'
         td[a].style.visibility="hidden";
         button[a].style.visibility='hidden';
         }
         for(a=7; a<10; a++){
          td[a].style.visibility="hidden";
          button[a].style.visibility='hidden';
         }
          break;
        
       case  'Category 2':
        let b
        for(b=0; b<10; b++){
          td[b].style.visibility="visible";
          button[b].style.visibility='visible';
      }
        for(b=0; b<5; b++){
         td[b].style.visibility="hidden";
         button[b].style.visibility='hidden';
       }
         for(b=7; b<10; b++){
          td[b].style.visibility="hidden";
          button[b].style.visibility='hidden';
         }
          break;
                  
          case  'Category 3':
           let c
           for(c=0; c<10; c++){
            td[c].style.visibility="visible";
            button[c].style.visibility='visible';
            }
          for(c=0; c<5; c++){
            td[c].style.visibility="hidden";
            button[c].style.visibility='hidden';
             }
            for(c=5; c<7; c++){
              td[c].style.visibility="hidden";
              button[c].style.visibility='hidden';
             }
           break;
           case  'Category':          //Тут просто обновляем стиль
            let d
            for(d=0; d<10; d++){
             td[d].style.visibility="visible";
             button[d].style.visibility='visible';
             console.log('value1')}
             break;
    
    }
    
    
  }



  constructor() { }
}
