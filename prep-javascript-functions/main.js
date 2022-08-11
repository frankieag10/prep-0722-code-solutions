// addTwoNumbers //
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);
// end of AddTwoNumbers //

// ConvertHoursToMinutes //
function convertHoursToMinutes(hours) {
  return Math.floor(hours * 60);

}
var hours = convertHoursToMinutes(2);
console.log(hours);
// End of ConvertHoursToMinutes //

// getGretting //
function getGretting(name) {
  return name;
}

var name = getGretting('World!');
console.log('Hello ' + name);
// end getGreeting //

// addAndMultiplyBy5 //
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var add = addAndMultiplyBy5(10, 5);
console.log('output is ' + add);
// addAndMultiplyBy5 //

// multiplyAndDivideBy5 //
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multi = multiplyAndDivideBy5(35, 10);
console.log('output is ' + multi);
// end multiplyAndDivideBy5 //

// subtractTwoNumbers //
function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var sub = subtractTwoNumbers(22, 7);
console.log('output is ' + sub);
// end of subtractTwoNumbers //

// getCircleCircumference //
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circle = getCircleCircumference(5);
console.log('output is ' + circle);
// end getCircleCircumference //

// get full name //
function getFullName(firstName, lastName) {
  return firstName + lastName;
}

var fullname = getFullName('Juan ', 'Ramirez');
console.log('Full name is ' + fullname);
// end full name//

// cube //
function cube(number) {
  return number * number * number;
}
var cubes = cube(5);
console.log(cubes);
// cube //
