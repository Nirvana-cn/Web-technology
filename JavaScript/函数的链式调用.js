// 实现add(1)(2)(3)以及其拓展
function add(x) {
    let sum=x
    function temp(y) {
        sum=sum+y
        return temp
    }
    temp.valueOf=function () {
        return sum
    }
    temp.toString=function(){
        return sum+'';
    }
    return temp
}

// 法2
var add=(function(){
    var args=[];
    function addInner(){
        if(arguments.length===0){
            return calResult;
        }else{
            Array.prototype.push.apply(args,Array.prototype.splice.call(arguments,0));
            return add;
        }
    }
    function calResult(){
        var result=args.reduce(function(previousValue, currentValue){
            return previousValue+currentValue;
        },0);
        args=[];
        return result;
    }
    addInner.valueOf=function(){
        return calResult();
    };

    addInner.toString=function(){
        return calResult()+'';
    };

    return addInner;
}());