import { Component, Inject, OnInit } from '@angular/core';
import { LOTTERY_SERVICE } from '../../app.component';
import { ILotteryService } from '../../services/i-lottery-service';
import { GlobalDataService } from '../../services/global-data.service';
import { LotteryModel } from '../../models/lottery-model';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.css']
})
export class PresetsComponent implements OnInit {
	
	private lotteryModels: Array<LotteryModel>;

	constructor(
  	globalDataService: GlobalDataService,
  	@Inject(LOTTERY_SERVICE) lotteryService: ILotteryService) {
  	this.lotteryModels = globalDataService.getLotteryModels();
  }

  ngOnInit() {
  }

}
