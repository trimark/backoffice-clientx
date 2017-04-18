import { Component, Inject, OnInit } from '@angular/core';
import { LOTTERY_SERVICE } from '../../app.component';
import { ILotteryService } from '../../services/i-lottery-service';
import { GlobalDataService } from '../../services/global-data.service';
import { Game } from '../../models/game';
import { Lottery } from '../../models/lottery';

@Component({
  selector: 'app-lotteries',
  templateUrl: './lotteries.component.html',
  styleUrls: ['./lotteries.component.css']
})
export class LotteriesComponent implements OnInit {
	private lotteries: Array<Lottery>;

  constructor(
  	globalDataService: GlobalDataService,
  	@Inject(LOTTERY_SERVICE) lotteryService: ILotteryService
  ) {
  	let lotteryBaseGames:Array<Game> =  globalDataService.getLotteryBaseGames();
  	lotteryService.getLotteries(lotteryBaseGames[0].getId(), 0, null, "no", "no").subscribe(
      (lotteries: Array<Lottery>) => {
        this.lotteries = lotteries;
      }
    );
  }

  ngOnInit() {
  }

}
