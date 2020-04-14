import { Component, OnInit, Input } from '@angular/core';
import { Flower } from '../flower';
import { Bee } from '../bee';
import { GameMonth } from '../month';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {

  @Input()
  reviewBee: Bee;

  @Input()
  reviewFlower: Flower;

  type: string;

  sciName: string;

  id: string;

  imgSrc: string;

  species: string;

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  periods:
    {from: number, to: number, begin: string, end: string}[] = new Array<{from: number, to: number, begin: string, end: string}>();

  constructor() { }

  ngOnInit() {
    this.initializeParams();
  }

  initializeParams() {
    if (this.reviewBee) {
      this.id = this.reviewBee.id;
      this.imgSrc = this.reviewBee.imgSrc;
      this.species = this.reviewBee.species;
      this.sciName = this.reviewBee.scientificName;
      this.type = 'bee';
    }
    if (this.reviewFlower) {
      this.id = this.reviewFlower.id;
      this.imgSrc = this.reviewFlower.imgSrc;
      this.species = this.reviewFlower.species;
      this.sciName = this.reviewFlower.scientificName;
      this.type = 'flower';
    }

    this.calculatePeriods();
  }

  calculatePeriods() {
    let activePeriods;
    if (this.reviewFlower) {
      activePeriods = this.reviewFlower.activePeriods;
    }
    if (this.reviewBee) {
      activePeriods = this.reviewBee.activePeriods;
    }

    for (const p of activePeriods) {
      let f = this.months.indexOf(p.from.main) / this.months.length + this.interpretSubMonth(p.from);
      let t = (this.months.indexOf(p.to.main)) / this.months.length + this.interpretSubMonth(p.to);

      if (p.from.sub === 'early-') {
        f -= 0.25 / this.months.length;
      }

      if (p.to.sub === '') {
        t += 1 / this.months.length;
      } else if (p.to.sub === 'late-') {
        t += 0.25 / this.months.length;
      }

      this.periods.push({from: f, to: t, begin: p.from.sub + p.from.main, end: p.to.sub + p.to.main});
    }
  }

  interpretSubMonth(month: GameMonth): number {
    const monthLength = 1 / this.months.length;
    switch (month.sub) {
      case '':
        return 0 * monthLength;
      case 'early-':
        return 0.25 * monthLength;
      case 'mid-':
        return 0.5 * monthLength;
      case 'late-':
        return 0.75 * monthLength;
    }
  }
}