import {Point} from './point'


function log(message){
    console.log(message);
}
var message = "Lets start with simple example ";

log(message);

function dosomething(){
    for (let i =0 ; i< 5; i++){
        console.log(i);
    }
    //console.log('finally ' + i); //cant use this statementwith let
}
dosomething();

let count = 5;

let a; // type is any
a= 1;
a=true;
a= 'manoj';

let b :number;
b = 5;
//b= 'manodf' // compiler starts shouting
// can use number . boolean, string , any, number[], any[] .. so ont
// Best part is  enum

enum color{ Red, Green, Yellow}
let bg:number = color.Red
console.log("Enum value is " + bg);

var dolog = () => console.log(message);
dolog();

interface CheckPoint {
    x: number,
    y: number 
}


// let p : Point; // this is just declaration

 let p = new Point(5,6);
 // p._x = 7 // fuck up coZ x is private 
p.draw();
p.x;   // property usage
p.y = 9  // proerty usage
// access modifier 
// publc private protected

//************ PRess F2 to change a name , it will all over the file */
import {LikesComponent} from './like.Component';
let component =  new LikesComponent(10,true);
component.onclick();
console.log(`likesCOunt : ${component.likesCount} , isSelected : ${component.isSelected }`);
