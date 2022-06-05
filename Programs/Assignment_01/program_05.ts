function Fibonacci(value: number): void
{
    var No1 = 1, No2 = 0, No3 = 0;

    for (No1 = 1; value > 0; value--)
    { 
        console.log(No3);
        No3 = No1+No2;
        No1=No2;
        No2 = No3;
        
        if (No3 > value)
        {
            break;    
        }
    }
}

Fibonacci(21);