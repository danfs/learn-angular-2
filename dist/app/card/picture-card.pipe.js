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
var PictureCardPipe = (function () {
    function PictureCardPipe() {
    }
    PictureCardPipe.prototype.transform = function (value, args) {
        if (value == 11) {
            return 'J';
        }
        ;
        if (value == 12) {
            return 'Q';
        }
        ;
        if (value == 13) {
            return 'K';
        }
        ;
        if (value == 14) {
            return 'A';
        }
        ;
        return value;
    };
    PictureCardPipe = __decorate([
        core_1.Pipe({
            name: 'pictureCard'
        }), 
        __metadata('design:paramtypes', [])
    ], PictureCardPipe);
    return PictureCardPipe;
}());
exports.PictureCardPipe = PictureCardPipe;
//# sourceMappingURL=picture-card.pipe.js.map