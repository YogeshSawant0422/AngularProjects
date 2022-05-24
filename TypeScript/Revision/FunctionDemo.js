function fun() {
    console.log("Inside fun");
}
fun();
function gun(no) {
    console.log("Inside gun: " + no);
}
gun(11);
function sun(no) {
    var i = no;
    i++;
    return i;
}
var ret = 0;
var a = 10;
ret = sun(a);
console.log("Return Value is : " + ret);
