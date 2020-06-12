import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HelperServiceService } from '../services/helper-service.service';
 
@Component({
  selector: 'app-mail-body',
  templateUrl: './mail-body.component.html',
  styleUrls: ['./mail-body.component.css']
})
export class MailBodyComponent implements OnInit {

  constructor(private svc: HelperServiceService, private router: ActivatedRoute, private route: Router) { }

  mailBody: any;
  id: number;

  deleteFromBody() {
    this.svc.sendToTrash(this.id);
    this.route.navigate(['/inbox']);
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.mailBody = this.svc.getMailId(this.id);
    });
  }

}
