import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InboxMessage } from './../inboxmessage';
import { MockMailService } from './../mock.mail.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})

export class MessageDetailComponent implements OnInit {
  @Input() message: InboxMessage;
  constructor(private route: ActivatedRoute, private mailService: MockMailService) { }

  ngOnInit() {
  }
}
