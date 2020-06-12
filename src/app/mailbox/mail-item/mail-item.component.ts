import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

import { HelperServiceService } from '../../services/helper-service.service';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  @Input() mailItem: any;
  @Input() index: number;

  constructor(private svc: HelperServiceService, private router: Router) { }

  getMailBody(index: number) {
    this.router.navigate(['/mail-body', index]);
    // this.svc.isOpened(index);
  }

  delete(index: number) {
    this.svc.sendToTrash(index);
  }

  showPreview() {
    this.svc.mailPreview.next(this.mailItem);
  }

  ngOnInit() {
  }

}
