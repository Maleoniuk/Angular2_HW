import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { DirectDirective } from './direct.directive';
import { UserComponent } from './user/user.component';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DirectDirective,
    UserComponent,
   
   
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
