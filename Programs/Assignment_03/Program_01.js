var Arithmetic = /** @class */ (function () {
    function Arithmetic(value1, value2) {
        this.Number1 = value1;
        this.Number2 = value2;
    }
    Arithmetic.prototype.Addition = function () {
        var Sum = this.Number1 + this.Number2;
        return Sum;
    };
    Arithmetic.prototype.Substraction = function () {
        var Sub = this.Number1 - this.Number2;
        return Sub;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Mult = this.Number1 * this.Number2;
        return Mult;
    };
    Arithmetic.prototype.Division = function () {
        var Div = this.Number1 / this.Number2;
        return Div;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(10, 20);
var obj2 = new Arithmetic(30, 40);
var ret1 = 0;
ret1 = obj1.Addition();
console.log("Addition is : " + ret1);
ret1 = obj1.Substraction();
console.log("Substraction is : " + ret1);
ret1 = obj1.Multiplication();
console.log("Multiplication is : " + ret1);
ret1 = obj1.Division();
console.log("Division is : " + ret1);
var ret2 = 0;
ret2 = obj2.Addition();
console.log("Addition is : " + ret2);
ret2 = obj2.Substraction();
console.log("Substraction is : " + ret2);
ret2 = obj2.Multiplication();
console.log("Multiplication is : " + ret2);
ret2 = obj2.Division();
console.log("Division is : " + ret2);
