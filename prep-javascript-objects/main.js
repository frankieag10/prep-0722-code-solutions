var person = {
  firstName: 'Frank',
  lastName: 'Aguirre',
  hobby: 'Soccer'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('the persons name is ' + fullName);

person.job = 'technician';
console.log('this persons job is ' + person.job);

person.previousjob = 'welder';
console.log('this persons previous job is ' + person.previousjob);

console.log(person);
