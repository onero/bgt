System.register(['angular2/core', './player.service', './game.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, player_service_1, game_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(playerService, gameService) {
                    this.year = '2015';
                    this.players = playerService.getPlayers();
                    this.games = gameService.getGames();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <ul class=\"nav nav-pills\">\n        <li [class.active]=\"year == '2015'\"><a (click)=\"year = '2015'\">2015</a></li>\n        <li [class.active]=\"year == '2016'\"><a (click)=\"year = '2016'\">2016</a></li>\n      </ul>\n          <div [ngSwitch]=\"year\">\n            <template [ngSwitchWhen]=\"'2015'\" ngSwitchDefault>\n            <h1>Board Game Tournament 2015</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                    <tr>\n                        <th>- Players -</th>\n                        <th *ngFor=\"#game of games\"> {{ game }}</th>\n                        <th>Joker</th>\n                        <th>Points Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"#player of players\">\n                        <th>{{ player }}</th>\n                        <td *ngFor=\"#game of games\">\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            </template>\n\n            <template [ngSwitchWhen]=\"'2016'\">\n            <h1>Board Game Tournament 2016</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                    <tr>\n                        <th>- Players -</th>\n                        <th *ngFor=\"#game of games\"> {{ game }}</th>\n                        <th>Joker</th>\n                        <th>Points Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"#player of players\">\n                        <th>{{ player }}</th>\n                        <td *ngFor=\"#game of games\">\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            </template>\n          </div>\n    ",
                        providers: [player_service_1.PlayerService, game_service_1.GameService]
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService, game_service_1.GameService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map