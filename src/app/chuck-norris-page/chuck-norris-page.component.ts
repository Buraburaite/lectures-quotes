import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-chuck-norris-page',
  templateUrl: './chuck-norris-page.component.html',
  styleUrls: ['./chuck-norris-page.component.css'],
  providers: [JokesService]
})
export class ChuckNorrisPageComponent implements OnInit {

  currentJoke: any;

  constructor(private theService: JokesService) { }

  ngOnInit() {
    this.newJoke();
  }

  newJoke() {
    this.theService.getRandom()
    .then(result => {
      this.currentJoke = result.value.joke;
    })
    // .catch(err => throw err)
  }

}
