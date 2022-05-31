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

var abc = new Circle(15);
var abc2 = new Circle(10);

var ret: number = 0;
ret = abc.Area();
console.log("Area Of Circle Is : " + ret);

ret = abc2.Area();
console.log("Area Of Circle Is : " + ret);