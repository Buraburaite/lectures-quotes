import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CounterService } from './my-services/counter.service';

import { AppComponent } from './app.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { CountersComponent } from './counters/counters.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ChuckNorrisPageComponent } from './chuck-norris-page/chuck-norris-page.component';

const routes: Routes = [
  // http://localhost:4200/quotes
  { path: 'quotes', component: QuoteListComponent },
  // http://localhost:4200/home
  { path: 'home', component: MyHomeComponent },
  // http://localhost:4200/about
  { path: 'about', component: MyAboutComponent },

  { path: 'contacts', component: ContactListComponent },

  { path: 'contact/:id', component: ContactComponent },

  { path: 'counters', component: CountersComponent },

  { path: 'chuck', component: ChuckNorrisPageComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    QuoteItemComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    CountersComponent,
    MyCounterComponent,
    ChuckNorrisPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
