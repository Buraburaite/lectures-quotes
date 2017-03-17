import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class JokesService {

  jokes: Array<string> = [
    'Chuck Norris was once bitten by a venomous cobra, and after five days of excrutiating pain, the cobra died'
  ];

  constructor(private myHttp: Http) { }

  getRandom() {
    return this.myHttp.get('http://api.icndb.com/jokes/random')
    .toPromise()
    .then(result => result.json())
    // .catch(err => throw err)
  }

}
