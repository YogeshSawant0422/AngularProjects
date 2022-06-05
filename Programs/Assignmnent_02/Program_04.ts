function ChkArmstrong (no:number): number
{
    var Dcount = 0 ,sum = 0;
    var temp = no;

    while (temp > 0)
    {
        Dcount = temp % 10; 
        var a: number = parseInt(Dcount.toPrecision(1));
        var x: number = a * a * a;
        sum = sum + x;
        var b: number = parseInt((temp = temp / 10).toFixed());     
        temp = b;
    }

    if (sum == no)
    {
        return 1;
    }
    else
    {
        return 0;
    } 
}

var ret = ChkArmstrong(153);

if (ret == 1)
{
    console.log("It is Armstring number");
}
else
{
    console.log("It is not Armstring number");
}
