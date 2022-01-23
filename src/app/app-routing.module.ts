import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { RegisterChatterComponent } from './chat/register-chatter/register-chatter.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'register', component: RegisterChatterComponent },
  { path: 'chat', component: ChatViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
