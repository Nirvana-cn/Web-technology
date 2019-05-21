function flatten(input) {
    let result={};
    Object.assign(result,initial(input));

    function initial(obj) {
        let keys=Object.keys(obj);
        let values={};
        keys.forEach((item)=>{
            if(obj[item] !== undefined){
                if(Object.prototype.toString.call(obj[item])==="[object Object]"){
                    Object.assign(values,flattenObject(obj[item],item));
                    return ;
                }
                if(Array.isArray(obj[item])){
                    Object.assign(values,flattenArray(obj[item],item));
                    return ;
                }
                values[item]=obj[item]
            }
        });
        return values;
    }

    function flattenObject(obj,str) {
        let keys=Object.keys(obj);
        let values={};
        keys.forEach((item)=>{
            if(obj[item] !== undefined){
                let name=str+"."+item;
                if(Object.prototype.toString.call(obj[item])==="[object Object]"){
                    Object.assign(values,flattenObject(obj[item],item));
                    return ;
                }
                if(Array.isArray(obj[item])){
                    Object.assign(values,flattenArray(obj[item],item));
                    return ;
                }
                values[name]=obj[item]
            }
        });
        return values;
    }

    function flattenArray(arr,str) {
        let values={};
        arr.forEach((item,index)=>{
            if(item !== undefined ){
                let name=str+"["+index+"]";
                if(Object.prototype.toString.call(item)==="[object Object]"){
                    Object.assign(values,flattenObject(item,name));
                    return ;
                }
                if(Array.isArray(item)){
                    Object.assign(values,flattenArray(item,name));
                    return ;
                }
                values[name]=item
            }
        });
        return values;
    }

    return result;
}

const input={
    a:1,
    b:[1,2,{c:true},[3]],
    d:{
        e:2,
        f:3
    },
    g:undefined
};

flatten(input);