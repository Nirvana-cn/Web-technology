function foo(){
    console.log(this.a)
}
var obj={
    a:2,
    foo:foo
};
var a='oops,global';
setTimeout(obj.foo,1000);