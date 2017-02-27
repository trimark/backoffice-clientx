/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppDataServiceService } from './app-data-service.service';

describe('AppDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppDataServiceService]
    });
  });

  it('should ...', inject([AppDataServiceService], (service: AppDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
