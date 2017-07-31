import { Message } from '_debugger';
import * as console from 'console';
import { Injectable } from '@angular/core';
import { InboxMessage } from './inboxmessage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

const MESSAGES: InboxMessage[] = [
  // tslint:disable-next-line:max-line-length
  { id: 1, subject: 'Subject 1', description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est massa, aliquet a tristique id, efficitur sit amet enim. Pellentesque dapibus mollis ipsum imperdiet luctus. Fusce elit tellus, tempus vel erat imperdiet, auctor condimentum quam. Duis condimentum nulla vel volutpat rutrum. Praesent sed egestas sem. Donec ante lectus, aliquam quis accumsan pellentesque, laoreet ut ante. Donec a bibendum sapien. Suspendisse potenti. Nam vel augue sit amet nisl porta condimentum.Pellentesque ac lectus et nisi bibendum cursus quis in nisl. Quisque dolor nisi, viverra vitae purus non, mattis rhoncus ante. Mauris id ligula sapien. Integer sit amet dolor quis felis auctor luctus non non magna. Nunc justo nibh, vulputate non nisi id, vestibulum ultricies leo. Phasellus malesuada velit vel eleifend iaculis. Pellentesque turpis risus, luctus sed fermentum sed, malesuada id enim. Aliquam ac lacinia magna. Quisque quis dapibus ligula. Phasellus vitae ligula sit amet justo scelerisque feugiat quis eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> <p>Sed blandit, dui id laoreet viverra, sem augue convallis tortor, in auctor est purus id lacus. Morbi pellentesque diam vel nunc rhoncus, vitae varius metus tincidunt. Duis sem leo, malesuada vel iaculis a, elementum eu purus. In augue neque, tempus ut sapien non, volutpat aliquam urna.</p>', from: 'test@test1.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 1) },
  { id: 2, subject: 'Subject 2', description: 'Description 2', from: 'test@test2.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 10) },
  { id: 3, subject: 'Subject 3', description: 'Description 3', from: 'test@test3.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 12) },
  { id: 4, subject: 'Subject 4', description: 'Description 4', from: 'test@test4.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 11) },
  // tslint:disable-next-line:max-line-length
  { id: 5, subject: 'Subject 5', description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est massa, aliquet a tristique id, efficitur sit amet enim. Pellentesque dapibus mollis ipsum imperdiet luctus. Fusce elit tellus, tempus vel erat imperdiet, auctor condimentum quam. Duis condimentum nulla vel volutpat rutrum. Praesent sed egestas sem. Donec ante lectus, aliquam quis accumsan pellentesque, laoreet ut ante. Donec a bibendum sapien. Suspendisse potenti. Nam vel augue sit amet nisl porta condimentum.Pellentesque ac lectus et nisi bibendum cursus quis in nisl. Quisque dolor nisi, viverra vitae purus non, mattis rhoncus ante. Mauris id ligula sapien. Integer sit amet dolor quis felis auctor luctus non non magna. Nunc justo nibh, vulputate non nisi id, vestibulum ultricies leo. Phasellus malesuada velit vel eleifend iaculis. Pellentesque turpis risus, luctus sed fermentum sed, malesuada id enim. Aliquam ac lacinia magna. Quisque quis dapibus ligula. Phasellus vitae ligula sit amet justo scelerisque feugiat quis eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> <p>Sed blandit, dui id laoreet viverra, sem augue convallis tortor, in auctor est purus id lacus. Morbi pellentesque diam vel nunc rhoncus, vitae varius metus tincidunt. Duis sem leo, malesuada vel iaculis a, elementum eu purus. In augue neque, tempus ut sapien non, volutpat aliquam urna.</p>', from: 'test@test5.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 21) },
  { id: 6, subject: 'Subject 6', description: 'Description 6', from: 'test@test6.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 22) },
  { id: 7, subject: 'Subject 7', description: 'Description 7', from: 'test@test7.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 26) },
  { id: 8, subject: 'Subject 8', description: 'Description 8', from: 'test@test8.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 25) },
  { id: 9, subject: 'Subject 9', description: 'Description 9', from: 'test@test9.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 23) },
  // tslint:disable-next-line:max-line-length
  { id: 10, subject: 'Subject 10', description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est massa, aliquet a tristique id, efficitur sit amet enim. Pellentesque dapibus mollis ipsum imperdiet luctus. Fusce elit tellus, tempus vel erat imperdiet, auctor condimentum quam. Duis condimentum nulla vel volutpat rutrum. Praesent sed egestas sem. Donec ante lectus, aliquam quis accumsan pellentesque, laoreet ut ante. Donec a bibendum sapien. Suspendisse potenti. Nam vel augue sit amet nisl porta condimentum.Pellentesque ac lectus et nisi bibendum cursus quis in nisl. Quisque dolor nisi, viverra vitae purus non, mattis rhoncus ante. Mauris id ligula sapien. Integer sit amet dolor quis felis auctor luctus non non magna. Nunc justo nibh, vulputate non nisi id, vestibulum ultricies leo. Phasellus malesuada velit vel eleifend iaculis. Pellentesque turpis risus, luctus sed fermentum sed, malesuada id enim. Aliquam ac lacinia magna. Quisque quis dapibus ligula. Phasellus vitae ligula sit amet justo scelerisque feugiat quis eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> <p>Sed blandit, dui id laoreet viverra, sem augue convallis tortor, in auctor est purus id lacus. Morbi pellentesque diam vel nunc rhoncus, vitae varius metus tincidunt. Duis sem leo, malesuada vel iaculis a, elementum eu purus. In augue neque, tempus ut sapien non, volutpat aliquam urna.</p>', from: 'test@test10.com', to: 'doni.jose@gmail.com'
        , receivedDate: new Date(2017, 7, 29) }
];

@Injectable()
export class MockMailService {
  constructor(private http: Http) { }

  fillMessageDescription(): any {
    let messageDescription: any;
    this.http.get('/ipsum.json').map(data => {
      return data.json();
    }).subscribe(description => {
      messageDescription = description.description.join('');
      MESSAGES.forEach(o => {
        if(o.id % 2 === 0) {
          o.description = messageDescription;
        }
      });
    });
  }

  getMessages(): InboxMessage[] {
    this.fillMessageDescription();
    return MESSAGES.sort(function(o1, o2){
      return o1.receivedDate < o2.receivedDate ? -1 : o1.receivedDate > o2.receivedDate ? 1 : 0;
    }).reverse();
  }

  getMessageById(id: number): InboxMessage {
    return MESSAGES.find(o => o.id === id);
  }
}
