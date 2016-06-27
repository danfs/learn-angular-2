import { Component } from '@angular/core';

import { Card } from './card/card';
import { CardComponent } from './card/card.component';
import { CardDeckService } from './card-deck.service';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	providers: 	[ CardDeckService ],
	directives: [ CardComponent ]
})
export class AppComponent {
  	title = 'Deck of Cards';
  	cardDeck: Card[];
	cardHand: Array<Card> = new Array();

	constructor(
		public cardDeckService: CardDeckService) {}

	ngOnInit() {
		this.getCards();
	}

	onShuffle(){
		this.collectCards();
		var currentIndex = this.cardDeck.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = this.cardDeck[currentIndex];
			this.cardDeck[currentIndex] = this.cardDeck[randomIndex];
			this.cardDeck[randomIndex] = temporaryValue;
		}
	}

	onDeal(number: number){
		this.cardHand.push.apply( this.cardHand, this.cardDeck.splice(0, number) );
	}

	onSort() {
		this.cardHand.sort(this.fieldSorter(['number']));
	}
	onSortSuit() {
		this.cardHand.sort(this.fieldSorter(['suit','number']));
	}

	collectCards() {
		if (this.cardDeck.length < 52){
			this.cardDeck = this.cardDeck.concat(this.cardHand);
			this.cardHand = new Array();
		}
	}

	fieldSorter(fields) {
	    return function (a, b) {
	        return fields
	            .map(function (o) {
	                var dir = 1;
	                if (o[0] === '-') {
	                   dir = -1;
	                   o=o.substring(1);
	                }
	                if (a[o] > b[o]) return dir;
	                if (a[o] < b[o]) return -(dir);
	                return 0;
	            })
	            .reduce(function firstNonZeroValue (p,n) {
	                return p ? p : n;
	            }, 0);
	    };
	}


	getCards() {
		this.cardDeck = this.cardDeckService.getCards();
	}
}

