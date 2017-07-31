import { Component, OnInit } from '@angular/core';
import { InboxMessage } from '../inboxmessage';
import { MockMailService } from '../mock.mail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  messages: InboxMessage[] = [];

  constructor(private mailService: MockMailService) { }

  ngOnInit() {
    this.messages = this.mailService.getMessages().slice(0, 4);
  }
}
