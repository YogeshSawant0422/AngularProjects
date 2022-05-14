function main() {
    var no = 12;
    var bret;
    bret = CheckEven(no);
    if (bret == true) {
        console.log("it is even number");
    }
    else {
        console.log("it is odd number");
    }
}
function CheckEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
