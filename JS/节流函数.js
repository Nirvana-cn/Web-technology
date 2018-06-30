function throttle(method,duration){
    var  begin=new Date();
    return function(){
        var context=this, args=arguments, current=new Date();
        if(current-begin>=duration){
            method.apply(context,args);
            begin=current;
        }
    }
}