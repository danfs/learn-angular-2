/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PictureCardPipe } from './picture-card.pipe';

describe('Pipe: PictureCard', () => {
  it('create an instance', () => {
    let pipe = new PictureCardPipe();
    expect(pipe).toBeTruthy();
  });
});
