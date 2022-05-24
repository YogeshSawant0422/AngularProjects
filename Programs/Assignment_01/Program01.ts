function Maximum(No1: number, No2: number, No3: number): number {
  var Max = 0;

  if (No1 > No2 && No1 > No3) {
    Max = No1;
  } else if (No2 > No1 && No2 > No3) {
    Max = No2;
  } else {
    Max = No3;
  }

  return Max;
}

var ret = Maximum(23, 89, 6);
console.log("Maximum number is " + ret);
