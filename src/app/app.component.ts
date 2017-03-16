import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Application';

  quoteA = {
    text: 'I love fries.',
    author: 'Neil Armstrong'
  }

  quoteB = {
    text: 'Anything is a dildo if you\'re brave enough',
    author: 'The Internet'
  }
}
