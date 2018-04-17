"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var source = rxjs_1.Observable.fromEvent(document, 'mousemove')
    .map(function (event) {
    return {
        x: event.clientX,
        y: event.clientX
    };
})
    .filter(function (el) {
    return el.x > 600;
});
source.subscribe(function (value) { return console.log(value); }, function (error) { return console.log("error: " + error); }, function () { return console.log('Complete'); });
//# sourceMappingURL=main3.js.map