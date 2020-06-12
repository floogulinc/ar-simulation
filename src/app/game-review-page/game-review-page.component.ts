import { Component, OnInit, Input } from '@angular/core';
import { Flower } from '../flower';
import { Bee } from '../bee';
import { GameMonth } from '../time-period';

@Component({
  selector: 'app-game-review-page',
  templateUrl: './game-review-page.component.html',
  styleUrls: ['./game-review-page.component.scss']
})

// A review page to show the active time lines of bees and flowers when a game (round) finishes
//    The review species with active periods belong to the game review item component
//    We may implement visiting paths of particular bees in the review path component and add it here
export class GameReviewPageComponent implements OnInit {

  @Input()
  flowers: Flower[] = new Array<Flower>();

  @Input()
  bees: Bee[] = new Array<Bee>();

  constructor() { }

  ngOnInit() {
    this.initializeDemoElements();
  }

  initializeDemoElements() {
    // each review item takes a flower or a bee as its input with the following required params
    // a review item can have multiple active periods
    this.flowers.push({
      id: 'f_1',
      species: 'black-eyed susan',
      scientificName: 'rudbeckia hirta',
      imgSrc: 'assets/images/1000w-8bit/flowers/rudbeckia hirta.png',
      activePeriods: [{from: {sub: '', main: 'March'} as GameMonth, to: {sub: '', main: 'May'} as GameMonth}]} as Flower);

    this.flowers.push({
      id: 'f_2',
      species: 'common dandelion',
      scientificName: 'taraxacum officinale',
      imgSrc: 'assets/images/1000w-8bit/flowers/taraxacum officinale.png',
      activePeriods: [{from: {sub: '', main: 'April'} as GameMonth, to: {sub: 'mid-', main: 'October'} as GameMonth}]} as Flower);

    this.flowers.push({
      id: 'f_3',
      species: 'stiff goldenrod',
      scientificName: 'solidago rigida',
      imgSrc: 'assets/images/1000w-8bit/flowers/solidago rigida.png',
      activePeriods: [{from: {sub: 'early-', main: 'June'} as GameMonth, to: {sub: 'late-', main: 'August'} as GameMonth}]} as Flower);

    this.bees.push({
      id: 'b_1',
      species: 'rusty patch bumble bee',
      scientificName: 'Bombus affinis',
      imgSrc: 'assets/images/1000w-8bit/bees/rusty patch bumblebee.png',
      activePeriods: [{from: {sub: '', main: 'April'} as GameMonth, to: {sub: 'early-', main: 'August'} as GameMonth}]} as Bee);

    this.bees.push({
      id: 'b_2',
      species: 'pugnacious leafcutter bee',
      scientificName: 'megachile pugnata',
      imgSrc: 'assets/images/1000w-8bit/bees/megachile pugnata.png',
      activePeriods: [{from: {sub: '', main: 'March'} as GameMonth,   to: {sub: 'early-', main: 'April'} as GameMonth},
                      {from: {sub: '', main: 'May'} as GameMonth,   to: {sub: '', main: 'June'} as GameMonth},
                      {from: {sub: 'late-', main: 'July'} as GameMonth, to: {sub: '', main: 'October'} as GameMonth}]} as Bee);

    this.bees.push({
      id: 'b_3',
      species: 'spine-shouldered cellophane bee',
      scientificName: 'colletes simulans',
      imgSrc: 'assets/images/1000w-8bit/bees/colletes simulans.png',
      activePeriods: [{from: {sub: 'mid-', main: 'March'} as GameMonth, to: {sub: 'early-', main: 'June'} as GameMonth}]} as Bee);
  }
}
