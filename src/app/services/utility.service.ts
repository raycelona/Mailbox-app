import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { Mail } from '../models/mail.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

}
