import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { RegisterChatterComponent } from './register-chatter/register-chatter.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ServicesModule } from '../services/services.module';

import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field"; 
import { MatSelectModule } from "@angular/material/select"; 
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from "@angular/material/list";



@NgModule({
  declarations: [
    ChatViewComponent,
    RegisterChatterComponent,
    ConversationComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule
  ],
  exports: [
    RegisterChatterComponent
  ]
})
export class ChatModule { }
