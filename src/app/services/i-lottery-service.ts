import { Observable } from 'rxjs/Observable';
import { Lottery } from '../models/lottery';
import { LotteryModel } from '../models/lottery-model';

export interface ILotteryService {

	getLotteries(gameId: number, drawId: number, status: string, showStreams: string, showGames: string): Observable<Array<Lottery>>;

	getLotteryModels(): Observable<Array<LotteryModel>>;

	createLotteryModel(lotteryModel: LotteryModel): Observable<string>;	
}
