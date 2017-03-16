import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes: Array<any> = [{
    id: 1,
    text: 'I love fries.',
    author: 'Neil Armstrong'
  },{
    id: 2,
    text: 'With enough bravery, anything can be a dildo',
    author: 'The Internet'
  }]

  constructor() { }

  ngOnInit() {
  }

  removeQuote (id) {
    this.quotes = this.quotes.filter( (quote) => quote.id !== id );
  }

}
