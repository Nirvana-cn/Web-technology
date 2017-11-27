function changeStr(str) {
    let arr=Array.from(str);
    let temp=[];
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i].charCodeAt(0)<=90){
            temp.unshift(arr.splice(i,1)[0])
        }
    }
    return arr.concat(temp).join('');
}
changeStr('AfderFVfdEOG');