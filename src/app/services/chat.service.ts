import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chat } from '../models/chat-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class ChatService {

  private readonly apiUrl = environment.chatMessageApi;
  private readonly chatMessages: BehaviorSubject<Chat[]>;
  private messsages$: Observable<Chat[]>; 

  constructor(private http: HttpClient) {
    this.chatMessages = new BehaviorSubject<Chat[]>([]);
    this.messsages$ = this.chatMessages.asObservable();
  }

  getMessages(room: string) : Observable<Chat[]> {
    this.getMessagesApi(room);
    return this.messsages$;
  }

  private getMessagesApi(room: string) : void {
    this.http.get<Chat[]>(`${this.apiUrl}/getMessages?room=${room}`)
    .subscribe(data => {
      this.chatMessages.next(data);
    });
  }

  sendChat(chat: Chat) : void {
    this.http.post<Chat>(
      `${this.apiUrl}/setMessage`, {...chat, timestamp: new Date()}, httpOptions)
      .subscribe(() => this.getMessages(chat.chatRoom!));
  }
}
