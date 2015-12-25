var should = require('should');
var Student = require('../Student');

describe('test/Student.test.js',function(){
    describe('#static',function(){
        it('should typeOf(instance) == object',function(){
            var s = new Student('whj',18,'male');
            (typeof(s)).should.equal('object');
        });

        it('should desc output "this is a Student Class"',function(){
            Student.desc().should.equal('this is a Student Class');
        });
    });

    describe('#instance',function(){
        it('should equal 15 when age === 15',function(){
            var s = new Student('whj',15,'male');
            s.age.should.equal(15);
        });

        it('should equal male when sex === "male"',function(){
            var s = new Student('whj',17,'male');
            s.sex.should.equal('male');
        });
    });
});