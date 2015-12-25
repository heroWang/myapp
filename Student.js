module.exports = function(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.study = function(){
        console.log(this.name + ' is busy on study.');
    }
}

module.exports.desc = function(){
    return 'this is a Student Class';
}