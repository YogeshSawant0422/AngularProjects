var Circle = /** @class */ (function () {
    function Circle(value1) {
        this.PI = 3.14;
        this.Number = value1;
    }
    Circle.prototype.Area = function () {
        var area = this.PI * (this.Number * this.Number);
        return area;
    };
    return Circle;
}());
var abc = new Circle(15);
var abc2 = new Circle(10);
var ret = 0;
ret = abc.Area();
console.log("Area Of Circle Is : " + ret);
ret = abc2.Area();
console.log("Area Of Circle Is : " + ret);
