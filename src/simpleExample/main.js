"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
function log(message) {
    console.log(message);
}
var message = "Lets start with simple example ";
log(message);
function dosomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log('finally ' + i); //cant use this statementwith let
}
dosomething();
var count = 5;
var a; // type is any
a = 1;
a = true;
a = 'manoj';
var b;
b = 5;
//b= 'manodf' // compiler starts shouting
// can use number . boolean, string , any, number[], any[] .. so ont
// Best part is  enum
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Yellow"] = 2] = "Yellow";
})(color || (color = {}));
var bg = color.Red;
console.log("Enum value is " + bg);
var dolog = function () { return console.log(message); };
dolog();
// let p : Point; // this is just declaration
var p = new point_1.Point(5, 6);
// p._x = 7 // fuck up coZ x is private 
p.draw();
p.x; // property usage
p.y = 9; // proerty usage
// access modifier 
// publc private protected
//************ PRess F2 to change a name , it will all over the file */
var like_Component_1 = require("./like.Component");
var component = new like_Component_1.LikesComponent(10, true);
component.onclick();
console.log("likesCOunt : " + component.likesCount + " , isSelected : " + component.isSelected);
