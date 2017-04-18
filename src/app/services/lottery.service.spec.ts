/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LotteryService } from './lottery.service';

describe('LotteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LotteryService]
    });
  });

  it('should ...', inject([LotteryService], (service: LotteryService) => {
    expect(service).toBeTruthy();
  }));
});
