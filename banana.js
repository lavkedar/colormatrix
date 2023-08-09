function getHexReturnMatrix(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
    hex
  );

  if (!result) return null;

  let base = 1 / 255;
  let rgbColor = {
    r: parseInt(result[1], 16) * base,
    g: parseInt(result[2], 16) * base,
    b: parseInt(result[3], 16) * base,
    a: result[4] ? parseInt(result[4], 16) * base : 1,
  };

  matrix =
    `0 0 0 0 ${rgbColor.r} ` + // Red
    `0 0 0 0 ${rgbColor.g} ` + // Green
    `0 0 0 0 ${rgbColor.b} ` + // Blue
    `0 0 0 ${rgbColor.a} 0`; // Alpha

  return matrix;
}

console.log(getHexReturnMatrix("#43ff64"));
