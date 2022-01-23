import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Registration } from 'src/app/models/registration-model';
import { RegisterService } from 'src/app/services/register.service';
import { availableChatRooms } from "../../models/chat-model";

@Component({
  selector: 'app-register-chatter',
  templateUrl: './register-chatter.component.html',
  styleUrls: ['./register-chatter.component.scss']
})
export class RegisterChatterComponent implements OnInit, OnDestroy {

  chatRooms = availableChatRooms;
  registrationForm: FormGroup;
  registration: Registration | undefined;
  subscription: Subscription | undefined;

  constructor(private registrationService: RegisterService, private router: Router) { 
    this.registrationForm = new FormGroup({
      screenName: new FormControl('', Validators.required),
      selectedChatRoom: new FormControl('', Validators.required)
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.registrationService.getRegistration()
    .subscribe(resp => {
      this.registration = resp;
    });
    console.log(`current user: ${JSON.stringify(this.registration)}`);
  }

  registerChatter(): void {
    const form: Registration = {
      ...this.registrationForm.value
    } 
    console.log(`Registration details: ${JSON.stringify(form)}`);
    this.registrationService.registerChatter(form);
    this.router.navigate(['chat', ]);
  }
}
