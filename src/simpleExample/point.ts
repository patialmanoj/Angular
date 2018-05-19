export class Point{
    //private x: number;
    // y: number;
    // constructor(x:number, y: number, z?:number){// z is optional
    //     this.x = x;
    //     this.y = y;

    // }
    // or above code can we rewritten down in short way 
    constructor( private _x?: number , private _y?: number){

    }

    draw(){
        console.log( 'x : ' + this._x + 'y : ' + this._y );
    }
    getDistance(another:Point){

    }
    setX(v){
        if(v< 0)
            throw new Error('value can not be less than zero');
        this._x =v;
    }
   // above mentioned is function or method 
   // we can have property syntax as well in TypeScript
    
   get x(){
    return this._x;
   }
   set y(value){
    this._y = value;
   }

}