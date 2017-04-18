import { Observable } from 'rxjs/Observable';
import { Game } from '../models/game';

export interface IGameService {
	
	getBaseGamesByCategory(category: string) : Observable<Array<Game>>;

	getTitleGames(): Observable<Array<Game>>;
}
