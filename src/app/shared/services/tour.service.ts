import { Injectable } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor(private joyrideService: JoyrideService) {}

  startTour() {
    this.joyrideService.startTour({
      steps: [
        'step1@product-assets',
        'step2@product-assets',
        'step3@product-assets'
      ],
      customTexts: {
        prev: 'Previous',
        next: 'Next',
        done: 'Done'
      },
      themeColor: '#559c8a'
    }).subscribe(
      step => {
        console.log('Next:', step);
      },
      error => {
        console.error('Error:', error);
      },
      () => {
        console.log('Tour finished');
      }
    );
  }
}
