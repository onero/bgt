System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PlayerService;
    return {
        setters:[],
        execute: function() {
            PlayerService = (function () {
                function PlayerService() {
                }
                PlayerService.prototype.getPlayers = function () {
                    return [
                        "Adam",
                        "Francesca",
                        "Antonello",
                        "Elisabetta",
                        "Enrico"];
                };
                return PlayerService;
            }());
            exports_1("PlayerService", PlayerService);
        }
    }
});
//# sourceMappingURL=player.service.js.map