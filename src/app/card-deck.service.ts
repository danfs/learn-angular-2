import { Injectable } from '@angular/core';

import { CARDDECK } from './card-deck';

@Injectable()
export class CardDeckService {

  	constructor() {}
	
	getCards() {
		return CARDDECK;
	}
}
