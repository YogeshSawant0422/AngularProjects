function main(): void {
  var no: number = 12;
  var bret: boolean;
  bret = CheckEven(no);
  if (bret == true) {
    console.log("it is even number");
  } else {
    console.log("it is odd number");
  }
}
function CheckEven(value: number): boolean {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

main();
