/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CardDeckService } from './card-deck.service';

describe('CardDeck Service', () => {
  beforeEachProviders(() => [CardDeckService]);

  it('should ...',
      inject([CardDeckService], (service: CardDeckService) => {
    expect(service).toBeTruthy();
  }));
});
