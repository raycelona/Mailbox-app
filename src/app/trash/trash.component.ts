import { Component, OnInit } from '@angular/core';

import { HelperServiceService } from '../services/helper-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  constructor(private svc: HelperServiceService) { }

  deletedItems: any;
  dialog: boolean = false;

  backToInbox(index: number) {
    this.svc.sendBackToInbox(index);
  }

  openDialog(deleted) {
    this.dialog = true;
    console.log(deleted)
  }

  permDelete(index: number) {
    // alert('That shit aint gonna come back!!');
    this.svc.delete(index);
  }

  ngOnInit() {
    this.deletedItems = this.svc.deletedMail;
  }

}
