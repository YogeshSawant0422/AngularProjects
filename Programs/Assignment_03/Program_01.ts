class Arithmetic
{
  Number1: number;
  Number2: number;

    constructor(value1: number, value2: number)
    {
    this.Number1 = value1;
    this.Number2 = value2;
    }

    Addition(): number
    {
    var Sum = this.Number1 + this.Number2;
    return Sum;
    }

    Substraction(): number
    {
    var Sub = this.Number1 - this.Number2;
    return Sub;
    }

    Multiplication(): number
    {
    var Mult = this.Number1 * this.Number2;
    return Mult;
    }

    Division(): number
    {
    var Div = this.Number1 / this.Number2;
    return Div;
    }
}

var obj1 = new Arithmetic(10, 20);
var obj2 = new Arithmetic(30, 40);

var ret1: number = 0;
ret1 = obj1.Addition();
console.log("Addition is : " + ret1);

ret1 = obj1.Substraction();
console.log("Substraction is : " + ret1);

ret1 = obj1.Multiplication();
console.log("Multiplication is : " + ret1);

ret1 = obj1.Division();
console.log("Division is : " + ret1);

var ret2: number = 0;
ret2 = obj2.Addition();
console.log("Addition is : " + ret2);

ret2 = obj2.Substraction();
console.log("Substraction is : " + ret2);

ret2 = obj2.Multiplication();
console.log("Multiplication is : " + ret2);

ret2 = obj2.Division();
console.log("Division is : " + ret2);
