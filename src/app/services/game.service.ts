import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Game } from '../models/game';
import { IGameService} from './i-game-service';
import { GlobalDataService } from './global-data.service';

@Injectable()
export class GameService implements IGameService {
	
	constructor(
		private http: Http,
    private globalDataService: GlobalDataService) { }

  getBaseGamesByCategory(category: string): Observable<Array<Game>> {
  	let headers: Headers = new Headers();
  	headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    return this.http.get("http://localhost:8003/games/findAllBaseGamesByCategory/" + category, 
      {
        headers: headers
      })
      .map((response: Response) => {
        let result: Array<Game> = new Array<Game>();
        for (let data of response.json().data) {
          result.push(new Game(data.id));
        }
        return result;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
  	console.log("handleError >>> ", error);
  	return Observable.throw("");
  }
}
