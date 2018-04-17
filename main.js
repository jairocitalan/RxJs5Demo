"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var number = [1, 5, 10];
var source = rxjs_1.Observable.from(number);
var MyObservable = /** @class */ (function () {
    function MyObservable() {
    }
    //next() ocurrio un evento me lo pasas a ver que paso
    MyObservable.prototype.next = function (value) {
        console.log("ValueOk: " + value + " ");
    };
    ;
    MyObservable.prototype.error = function (err) {
        console.log("Error:" + err);
    };
    ; //en cuanto ocurra un errror truena 
    MyObservable.prototype.complete = function () {
        console.log("Complete!");
    };
    ; //
    return MyObservable;
}());
source.subscribe(new MyObservable);
/*source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);*/ 
//# sourceMappingURL=main.js.map