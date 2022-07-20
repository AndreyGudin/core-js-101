/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/nbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/nber   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {nber} width
 * @param {nber} height
 * @return {nber}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  return width * height;
}


/**
 * Returns a circumference of circle given by radius.
 *
 * @param {nber} radius
 * @return {nber}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given nbers.
 *
 * @param {nber} value1
 * @param {nber} value2
 * @return {nber}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  const avrg1 = value1 % 2;
  const avrg2 = value2 % 2;
  const sum2 = (avrg1 + avrg2) / 2;
  let a = 0;
  let b = 0;
  if ((value1 / 2) < 0) {
    a = Math.round(value1 / 2);
  } else a = Math.floor(value1 / 2);
  if ((value2 / 2) < 0) {
    b = Math.round(value2 / 2);
  } else b = Math.floor(value2 / 2);
  return a + b + sum2;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {nber} x1
 * @param {nber} y1
 * @param {nber} x2
 * @param {nber} y2
 *
 * @return {nber}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {nber} a
 * @param {nber} b
 * @return {nber}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  return (-b / a).toFixed(0);
}


/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {nber} x1
 * @param {nber} y1
 * @param {nber} x2
 * @param {nber} y2
 * @return {nber}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magn1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const magn2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  return Math.acos(dotProduct / (magn1 * magn2));
}

/**
 * Returns a last digit of a integer nber.
 *
 * @param {nber} value
 * @return {nber}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  const str = `${value}`;
  return str.split('')[str.split('').length - 1];
}


/**
 * Returns a nber by given string representation.
 *
 * @param {string} value
 * @return {nber}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  return +value;
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {nber} a
 * @param {nber} b
 * @param {nber} c
 * @return {nber}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}


/**
 * Returns the nber rounded to specified power of 10.
 *
 * @param {nber} n
 * @param {nber} pow
 * @return {nber}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(n, pow) {
  return Math.round(n / (10 ** pow)) * 10 ** pow;
}

/**
 * Returns true is the nber is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {nber} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  if (n === 2 || n === 3) return true;
  if (n <= 1 || n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Tries to convert value to nber and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {nber}
 *
 * @example
 *   tonber(null, 0) => 0
 *   tonber('test', 0) => 0
 *   tonber('1', 0) => 1
 *   tonber(42, 0) => 42
 *   tonber(new nber(42), 0) => 42
 */
function toNumber(value, def) {
  const convNumb = parseInt(value, 10);
  if ((typeof convNumb === 'number') && (!Number.isNaN(convNumb))) return convNumb;
  return def;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
