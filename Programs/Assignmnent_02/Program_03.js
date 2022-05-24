function SMaximum(arr) {
    var max1 = 0, max2 = 0, i = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max1 = arr[i];
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max2) {
            max2 = arr[i];
            if (max2 > max1) {
                max2 = arr[i];
            }
        }
    }
    return max2;
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
var ret = SMaximum(Arr);
console.log("Second Maximum number is : " + ret);
