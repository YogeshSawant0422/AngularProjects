function DisplayFactors(value:number)
{
    for (var i = 1; i < value; i++)
    {
        if (value % i == 0)
        {
            console.log(" "+i);
        }
    }
}

DisplayFactors(20);