class Arithmetic
{
    Number1:number;
    Number2: number;
    
    constructor(value1:number,value2:number)
    {
        this.Number1 = value1;
        this.Number2 = value2;
    }
    
    Addition():number
    {
        var Sum = this.Number1 + this.Number2;
        return Sum;

    }

    Substraction()
    {
        var Sub = this.Number1 - this.Number2;
        return Sub;
    }
   
    Multiplication()
    {
        var Mult = this.Number1 * this.Number2;
        return Mult;
    }

    Division()
    {
        var Div = this.Number1 * this.Number2;
        return Div;
    }

}

var obj1 = new Arithmetic(10,20);
var obj2 = new Arithmetic(30,40);



