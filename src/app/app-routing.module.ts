import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailboxComponent } from './mailbox/mailbox.component';
import { TrashComponent } from './trash/trash.component';
import { MailBodyComponent } from './mail-body/mail-body.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ComposeComponent } from './compose/compose.component';
 
const routes: Routes = [
  {path: '', component: SignUpComponent},
  {path: 'inbox', component: MailboxComponent},
  {path: 'mail-body/:id', component: MailBodyComponent},
  {path: 'compose', component: ComposeComponent},
  {path: 'trash', component: TrashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MailboxComponent, 
  TrashComponent, 
  MailBodyComponent, 
  SignUpComponent, 
  ComposeComponent
]
