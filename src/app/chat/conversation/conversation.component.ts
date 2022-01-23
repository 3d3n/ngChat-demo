import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat-model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  @Input()
  chatMessages: Chat[] | any;

  constructor() { }

  ngOnInit(): void {
  }

}
