import { MockMailService } from './../mock.mail.service';
import { InboxMessage } from './../inboxmessage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent implements OnInit {
  messages: InboxMessage[] = [];
  selectedMessage: InboxMessage;

  constructor(private mailService: MockMailService) { }

  ngOnInit() {
    this.messages = this.mailService.getMessages();
  }

  onSelect(message: InboxMessage): void {
    this.selectedMessage = message;
  }
}
