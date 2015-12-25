var Student = require('./Student.js');

var stu = new Student('whj',15,'male');

stu.study();
var desc = Student.desc();
console.log(desc);