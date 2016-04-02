System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var JokerService;
    return {
        setters:[],
        execute: function() {
            JokerService = (function () {
                function JokerService() {
                }
                JokerService.prototype.getJokers = function () {
                    return [
                        "Adam",
                        "Francesca",
                        "Antonello",
                        "Elisabetta",
                        "Enrico"];
                };
                return JokerService;
            }());
            exports_1("JokerService", JokerService);
        }
    }
});
//# sourceMappingURL=joker.service.js.map