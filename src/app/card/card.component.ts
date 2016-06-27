import { Component, Input } from '@angular/core';

import { Card } from './card';
import { PictureCardPipe } from "./picture-card.pipe"

@Component({
	moduleId: module.id,
  	selector: 'card-face',
  	templateUrl: 'card.component.html',
  	pipes: 		[ PictureCardPipe ]
})

export class CardComponent {
  @Input() card: Card;

  constructor() {}
}