import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { mail } from '../mail';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  constructor() { }

  mail = mail;
  deletedMail = [];
  mailPreview: Subject<any> = new Subject<any>();
  mailSub: Subject<any> = new Subject<any>();
  opened: boolean;

  sendMail() {
    return this.mail;
  }

  isOpened(index: number) {
    for(let i = 0; i < this.mail.length; i++) {
      if(this.mail[i]['opened'] === true) {
        this.mail[i]['opened'] = false;
      }
    }
  }
 
  delete(index: number) {
    this.deletedMail.splice(index, 1);
  }

  sendBackToInbox(index: number) {
    this.mail.push(...this.deletedMail.splice(index, 1));
  }

  sendToTrash(index: number) {
   this.deletedMail.push(...this.mail.splice(index, 1));
  }

  getMailId(index: number) {
    return this.mail[index]
  }

}
