import { Injectable } from '@angular/core';
import { InboxMessage } from './inboxmessage';

const MESSAGES: InboxMessage[] = [
  { id: 1, subject: 'Subject 1', description: 'Description 1', from: 'test@test1.com', to: 'doni.jose@gmail.com' },
  { id: 2, subject: 'Subject 2', description: 'Description 2', from: 'test@test2.com', to: 'doni.jose@gmail.com' },
  { id: 3, subject: 'Subject 3', description: 'Description 3', from: 'test@test3.com', to: 'doni.jose@gmail.com' },
  { id: 4, subject: 'Subject 4', description: 'Description 4', from: 'test@test4.com', to: 'doni.jose@gmail.com' },
  { id: 5, subject: 'Subject 5', description: 'Description 5', from: 'test@test5.com', to: 'doni.jose@gmail.com' },
  { id: 6, subject: 'Subject 6', description: 'Description 6', from: 'test@test6.com', to: 'doni.jose@gmail.com' },
  { id: 7, subject: 'Subject 7', description: 'Description 7', from: 'test@test7.com', to: 'doni.jose@gmail.com' },
  { id: 8, subject: 'Subject 8', description: 'Description 8', from: 'test@test8.com', to: 'doni.jose@gmail.com' },
  { id: 9, subject: 'Subject 9', description: 'Description 9', from: 'test@test9.com', to: 'doni.jose@gmail.com' },
  { id: 10, subject: 'Subject 10', description: 'Description 10', from: 'test@test10.com', to: 'doni.jose@gmail.com' }
];

@Injectable()
export class MailService {
  constructor() { }
}
