class Circle
{
    PI: number;
    Number: number;
    constructor(value1:number)
    {
        this.PI = 3.14;
        this.Number = value1;
    }
    
    Area():number
    {
        var area: number = this.PI * (this.Number * this.Number);
        return area;
    }
}

class CircleX extends Circle
{
    Circumference():number
    {
        var c = 2 * this.PI * this.Number;
        return c;
    }
}

var Ret: number = 0;

var obj1 = new Circle(15);
var obj2 = new CircleX(20);

Ret = obj1.Area();
console.log("Area Of Circle is : " + Ret);

Ret = obj2.Circumference();
console.log("Circumference of circle is : " + Ret);
