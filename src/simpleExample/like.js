var Likes = /** @class */ (function () {
    function Likes() {
        this._totalLike = 0;
        this._like = 0;
    }
    Likes.prototype.like = function () {
        if (this._like <= 1) {
            this._like++;
            this._totalLike++;
        }
        console.log("like " + this._like);
    };
    Likes.prototype.unlike = function () {
        if (this._like > 0) {
            this._like--;
            this._totalLike--;
        }
        console.log("unlike " + this._like);
    };
    Likes.prototype.get_totalLikeCount = function () {
        return this._totalLike;
    };
    return Likes;
}());
var user1 = new Likes();
user1.like();

var user2 = new Likes();
user2.like();
console.log(user2.get_totalLikeCount());
