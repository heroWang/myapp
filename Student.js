//Constructor
function Student(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    // this.study = function(){
    //     console.log(this.name + ' is busy on study.');
    // }
}

//Instance method
Student.prototype.study = function() {
    console.log(this.name + ' is busy on study.');
};

//Static method
Student.desc = function() {
    return 'this is a Student Class';
};


module.exports = Student;
// module.exports.desc = function(){
//     return 'this is a Student Class';
// }


