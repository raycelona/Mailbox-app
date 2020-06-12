import { Component, OnInit } from '@angular/core';

import { HelperServiceService } from '../services/helper-service.service';

@Component({
  selector: 'app-mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.css']
})
export class MailPreviewComponent implements OnInit {

  constructor(private svc: HelperServiceService) { }

  preview: any;

  ngOnInit() {
    this.svc.mailPreview.subscribe((item) => {
      this.preview = item;
    })
  }

}
