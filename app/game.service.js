System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GameService;
    return {
        setters:[],
        execute: function() {
            GameService = (function () {
                function GameService() {
                }
                GameService.prototype.getGames = function () {
                    return [
                        "Tokaido",
                        "Caverna",
                        "Ticket To Ride: Europe",
                        "Antike",
                        "Fief",
                        "Puerto Rico",
                        "Trajan",
                        "Instanbul",
                        "Robo Rally",
                        "Eclipse",
                    ];
                };
                return GameService;
            }());
            exports_1("GameService", GameService);
        }
    }
});
//# sourceMappingURL=game.service.js.map