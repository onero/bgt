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
                    this.players = playerService.getPlayers();
                    this.games = gameService.getGames();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Board Game Tournament 2015</h1>\n    <table class=\"table table-bordered\">\n        <thead>\n            <tr>\n                <th>#Players</th>\n                <th *ngFor=\"#game of games, #i = index\">Game {{ i + 1 }}</th>\n                <th>Joker</th>\n                <th>Points Total</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#player of players\">\n                <th>{{ player }}</th>\n                <td *ngFor=\"#game of games\">\n                {{ game }}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    ",
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