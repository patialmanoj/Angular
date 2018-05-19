
export class LikesComponent {
    constructor(private _likesCount : number , private _isSelected:boolean){
     }
    onclick(){
        this._likesCount += (this._isSelected)? -1:1;
        this._isSelected= !this._isSelected;
    }
    get likesCount() {
       return this._likesCount ;
    }
    get isSelected(){
        return this._isSelected;
    }
}

/*
// Badasss implementation

//  class Likes  {
//     private _like: number ;
//      _totalLike :number =0;
//     constructor(){
//         this._like = 0;
//     }
//     like(){
//         if(this._like <= 1){
//             this._like++  ;
//             this._totalLike++; 
//         }
//         console.log( "like "  + this._like);
//     }
//     unlike(){
//         if(this._like > 0 ){
//             this._like--;
//             this._totalLike--;
//         }
//         console.log( "unlike "  + this._like);
//     }
//     get_totalLikeCount(){
//         return this._totalLike;
//     }
// }

// let user1 = new Likes();
//  user1.like();
//  user1.like();
//  user1.unlike();
 
//  let user2 = new Likes();
//  user2.like();
// console.log(user2.get_totalLikeCount());

*/
