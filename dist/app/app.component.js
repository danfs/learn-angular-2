"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var card_component_1 = require('./card/card.component');
var card_deck_service_1 = require('./card-deck.service');
var AppComponent = (function () {
    function AppComponent(cardDeckService) {
        this.cardDeckService = cardDeckService;
        this.title = 'Deck of Cards';
        this.cardHand = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCards();
    };
    AppComponent.prototype.onShuffle = function () {
        this.collectCards();
        var currentIndex = this.cardDeck.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = this.cardDeck[currentIndex];
            this.cardDeck[currentIndex] = this.cardDeck[randomIndex];
            this.cardDeck[randomIndex] = temporaryValue;
        }
    };
    AppComponent.prototype.onDeal = function (number) {
        this.cardHand.push.apply(this.cardHand, this.cardDeck.splice(0, number));
    };
    AppComponent.prototype.onSort = function () {
        this.cardHand.sort(this.fieldSorter(['number']));
    };
    AppComponent.prototype.onSortSuit = function () {
        this.cardHand.sort(this.fieldSorter(['suit', 'number']));
    };
    AppComponent.prototype.collectCards = function () {
        if (this.cardDeck.length < 52) {
            this.cardDeck = this.cardDeck.concat(this.cardHand);
            this.cardHand = new Array();
        }
    };
    AppComponent.prototype.fieldSorter = function (fields) {
        return function (a, b) {
            return fields
                .map(function (o) {
                var dir = 1;
                if (o[0] === '-') {
                    dir = -1;
                    o = o.substring(1);
                }
                if (a[o] > b[o])
                    return dir;
                if (a[o] < b[o])
                    return -(dir);
                return 0;
            })
                .reduce(function firstNonZeroValue(p, n) {
                return p ? p : n;
            }, 0);
        };
    };
    AppComponent.prototype.getCards = function () {
        this.cardDeck = this.cardDeckService.getCards();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            providers: [card_deck_service_1.CardDeckService],
            directives: [card_component_1.CardComponent]
        }), 
        __metadata('design:paramtypes', [card_deck_service_1.CardDeckService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map