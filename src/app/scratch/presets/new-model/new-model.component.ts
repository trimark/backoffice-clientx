import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOTTERY_SERVICE } from '../../../app.component';
import { ILotteryService } from '../../../services/i-lottery-service';
import { LotteryModel } from '../../../models/lottery-model';

@Component({
  selector: 'app-new-model',
  templateUrl: './new-model.component.html',
  styleUrls: ['./new-model.component.css']
})
export class NewModelComponent implements OnInit {
	
	private lotteryModel: LotteryModel;

  constructor(
  	private router: Router,
  	@Inject(LOTTERY_SERVICE) private lotteryService: ILotteryService) {
  	this.lotteryModel = new LotteryModel(0, "Test00001", "Test00001");
  	this.lotteryModel.setGridRow(3);
    this.lotteryModel.setGridColumn(3);
    this.lotteryModel.setGridSize((this.lotteryModel.getGridRow() * this.lotteryModel.getGridColumn()));
    this.lotteryModel.setNumOfLines(9);
    this.lotteryModel.setNumOfPrizes(9);
    this.lotteryModel.setNumOfMultipliers(3);
    this.lotteryModel.setRowMatches(0);
    this.lotteryModel.setColumnMatches(0);
    this.lotteryModel.setDiagonalMatches(0);
    this.lotteryModel.setMultipliers("1;2;3");
    this.lotteryModel.setNearWinsPairHigh("2");
    this.lotteryModel.setNearWinsPairLow("2");
    this.lotteryModel.setDistinctWinPattern("2");
    this.lotteryModel.setNearWinsPairProbabilityPct("20");
    this.lotteryModel.setNearWinsPrizeProbabilityPct("20");
    this.lotteryModel.setNearWinsMultiplierProbabilityPct("20");
    this.lotteryModel.setWinMechanic("1");
    this.lotteryModel.setScratchMechanic("1");
    this.lotteryModel.setMatchMechanic("1");
    this.lotteryModel.setAnticipationControl("1");
  }

  onSave(): void {
  	this.lotteryService.createLotteryModel(this.lotteryModel).subscribe((response: string) => {
      this.router.navigate(["./scratch/models"]);
    });
  }

  ngOnInit() {
  }

}
