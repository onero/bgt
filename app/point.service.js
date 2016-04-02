System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PointService;
    return {
        setters:[],
        execute: function() {
            PointService = (function () {
                function PointService() {
                }
                PointService.prototype.getPoints = function () {
                    return [
                        1,
                        2,
                        3,
                        4,
                        5];
                };
                return PointService;
            }());
            exports_1("PointService", PointService);
        }
    }
});
//# sourceMappingURL=point.service.js.map