import { Component, Input } from '@angular/core';

import { Card } from './card';

@Component({
	moduleId: module.id,
  	selector: 'card-face',
  	templateUrl: 'card.component.html'
})

export class CardComponent {
  @Input() card: Card;

  constructor() {}
}