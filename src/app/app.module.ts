import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { InboxComponent } from './inbox/inbox.component';

import { MockMailService } from './mock.mail.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MessageDetailComponent } from './message-detail/message-detail.component';

import { StripHtmlPipe } from './striphtmlpipe';
import { CompactPipe } from './compactpipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    InboxComponent,
    MessageDetailComponent,
    StripHtmlPipe,
    CompactPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MockMailService],
  bootstrap: [AppComponent]
})

export class AppModule { }
