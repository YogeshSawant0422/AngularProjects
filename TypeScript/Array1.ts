// int Arr[5] = {10,20,30,40,50};    =>C,C++,JAVA,C#

//Arr is one dimentional array which contains 5 element 
// is of type number
var Arr: number[] = [10, 20, 30, 40, 50];

console.log("Lenght of array is : " + Arr.length);
console.log("First element is :" + Arr[0]);
console.log("second element is :" + Arr[1]);

console.log("Elements from array are : ");

var i: number = 0;

for (i = 0; i < Arr.length; i++)
{
    console.log(Arr[i]);
}