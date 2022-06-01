var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NCircle = /** @class */ (function () {
    function NCircle(value1) {
        this.PI = 3.14;
        this.Number = value1;
    }
    NCircle.prototype.Area = function () {
        var area = this.PI * (this.Number * this.Number);
        return area;
    };
    return NCircle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var c = 2 * this.PI * this.Number;
        return c;
    };
    return CircleX;
}(NCircle));
var Ret = 0;
var obj1 = new NCircle(15);
var obj2 = new CircleX(20);
Ret = obj1.Area();
console.log("Area Of Circle is : " + Ret);
Ret = obj2.Circumference();
console.log("Circumference of circle is : " + Ret);
