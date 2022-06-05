var PI: number = 3.14;

function Area(rad: number): number
{
  var area = PI * (rad * rad);
  return area;
}

var ret1 = Area(5);
console.log("Area Of Circle " + ret1);
