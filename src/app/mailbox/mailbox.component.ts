import { Component, OnInit, OnDestroy } from '@angular/core';

import { HelperServiceService } from '../services/helper-service.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  mailObj: any;

  constructor(private svc: HelperServiceService) { }

  ngOnInit() {
    this.mailObj = this.svc.mail;
  }

}
