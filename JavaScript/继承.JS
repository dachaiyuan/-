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
    // X.call(this);
    // this.__proto__.__proto__ = X;
}
Y.__proto__ = X;
Y.prototype.__proto__ = X.prototype;

console.log(new Y())