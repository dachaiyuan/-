class A {
   l = 123
}
class B extends A {

}

console.log(new B())


function X(){
    this.l = 123
}

function Y(){
    X.call(this,arguments);
    this.__proto__ = X;
}

console.log(new Y())