import { Component, OnInit } from '@angular/core';

import { HelperServiceService } from '../services/helper-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private svc: HelperServiceService) { }

  ngOnInit() {
  }

}
