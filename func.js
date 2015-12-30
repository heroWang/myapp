var foo = function(){
    this.value = 100;
};

foo.prototype.showVal = function(){
    console.log(this.value);
}



console.log(new foo().value);

console.log(global.value);
foo();
console.log(global.value);

new foo().showVal();
