var click =function(){

};
let n=10;
let obj={
    data:'123',
    click:function () {
        console.log(this)
    },
    fail:this.click,
    char:n,
    success:[
        {
            name:'1',
            onClick:this
        }
    ]
};

function test() {
    console.log(n)
}

// function click() {
//     console.log('click outer')
// }
