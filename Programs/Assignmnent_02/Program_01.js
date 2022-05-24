function Maximum(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var x = [23, 89, 6, 29, 56, 45, 77, 32];
var y = x.length;
var ret = Maximum(x);
console.log("Maximum number is : " + ret);
