import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, switchMap, takeUntil, tap, timer } from 'rxjs';
import {  availableChatRooms, Chat } from 'src/app/models/chat-model';
import { Registration } from 'src/app/models/registration-model';
import { ChatService } from 'src/app/services/chat.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit, OnDestroy {

  errorMsg = '';
  isActive = false;
  currentChatter: Registration | undefined;
  message = '';
  subscription: Subscription | undefined;

  chatRooms = availableChatRooms;
  selectedChatRoom?: string;
  chatMessages$: Observable<Chat[]> | any;
  private stopPolling = new Subject();

  constructor(private regService: RegisterService, private chatService: ChatService) { 
  }
  
  ngOnInit(): void {
    this.subscription = this.regService.getRegistration().subscribe(
      data => {
        this.currentChatter = data;
        this.selectedChatRoom = this.currentChatter?.selectedChatRoom;
        console.log(`current user ${this.currentChatter?.screenName}`);
      }
    );
    
    this.chatMessages$ = timer(0, 3000).pipe(
      tap(() => console.log('polling')),
      switchMap(() => 
        this.chatService.getMessages(this.selectedChatRoom as string)
      ),
      takeUntil(this.stopPolling)
    );
  }

  sendChat() : void {
    this.isActive = false;
    const req: Chat = {
      message: this.message,
      chatRoom: this.selectedChatRoom,
      screenName: this.currentChatter?.screenName
    };
    console.log(`chat details, ${JSON.stringify(req)}`)

    // req.chatRoom = '';
    //check if chat room is the same with current user's chat room
    if(req.chatRoom !== this.currentChatter?.selectedChatRoom){
      this.errorMsg = 'No Screen Name Registered. Please register a Screen Name';
    } else {
      this.chatService.sendChat(req);
    }
    this.message = '';
  }

  hide() {
    this.isActive = true;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.stopPolling.next('');
    // this.stopPolling.unsubscribe();
  }
}
