function ChkPrime(ino:number):boolean
{
    var icnt = 2;
    while (icnt <= ino)
    {
        if (ino % icnt != 0)
        {
            return true;
        }
        else
        {
            return false;
        }
        icnt++;
    }
}

var ret = ChkPrime(17);
if (ret == true)
{
    console.log("It is prime number");
}
else
{
    console.log("It is prime Not number");
}

