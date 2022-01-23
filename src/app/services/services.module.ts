import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './register.service';
import { ChatService } from './chat.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    ChatService
  ]
})
export class ServicesModule { }
