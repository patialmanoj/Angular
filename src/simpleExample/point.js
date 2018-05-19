"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    //private x: number;
    // y: number;
    // constructor(x:number, y: number, z?:number){// z is optional
    //     this.x = x;
    //     this.y = y;
    // }
    // or above code can we rewritten down in short way 
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('x : ' + this._x + 'y : ' + this._y);
    };
    Point.prototype.getDistance = function (another) {
    };
    Point.prototype.setX = function (v) {
        if (v < 0)
            throw new Error('value can not be less than zero');
        this._x = v;
    };
    Object.defineProperty(Point.prototype, "x", {
        // above mentioned is function or method 
        // we can have property syntax as well in TypeScript
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
