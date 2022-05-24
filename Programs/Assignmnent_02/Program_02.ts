function Summation(arr: number[]):number
{
    var sum = 0, i = 0;
    for (i = 0; i < arr[i]; i++)
    {
        sum = sum + arr[i];
    }   
    return sum;
}   


var arr = [23,6,7,4,5,7];
var ret = Summation(arr);
console.log("Addition is : "+ret);