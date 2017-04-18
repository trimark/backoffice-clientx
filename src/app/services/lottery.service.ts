import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ILotteryService} from './i-lottery-service';
import { GlobalDataService } from './global-data.service';
import { Lottery } from '../models/lottery';
import { LotteryModel } from '../models/lottery-model';

@Injectable()
export class LotteryService implements ILotteryService {

  constructor(
  	private http: Http,
    private globalDataService: GlobalDataService) { }

  getLotteries(gameId: number, drawId: number, status: string, showStreams: string, showGames: string): Observable<Array<Lottery>> {
  	let headers: Headers = new Headers();
  	headers.append("Jwt-Token", this.globalDataService.getJwtToken());
  	let options = new RequestOptions({ headers: headers });
  	return this.http.post("http://localhost:8003/lotteries/findAllLotteries", 
  		{
  			gameId: gameId,
  			drawId: drawId,
  			status: status,
  			streams: showStreams,
  			games: showGames
  		}, options)
      .map((response: Response) => {
        let result: Array<Lottery> = new Array<Lottery>();
        for (let data of response.json().data) {
          result.push(new Lottery(data.name, data.description, data.modelName, data.status, data.created));
        }
        return result;
      })
      .catch(this.handleError);
  }

  getLotteryModels(): Observable<Array<LotteryModel>> {
    let headers: Headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    return this.http.get("http://localhost:8003/lotteries/findAllModels", 
      {
        headers: headers
      })
      .map((response: Response) => {
        let result: Array<LotteryModel> = new Array<LotteryModel>();
        for (let data of response.json().data) {
          result.push(LotteryModel.fromJson(data));
        }
        return result;
      })
      .catch(this.handleError);  
  }

  createLotteryModel(lotteryModel: LotteryModel): Observable<string> {
    let headers = new Headers();
    headers.append("Jwt-Token", this.globalDataService.getJwtToken());
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:8003/lotteries/models/create", lotteryModel, options)
      .map((response: Response) => {
        return response.json().data;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
  	console.log("handleError >>> ", error);
  	return Observable.throw("");
  }
}
