console.log(search('abcaabcaaaaqwe'));
// 我自己写的
function search(str) {
    let val,index,length,temp,arr;
    length=str.length;
    temp=new Array(length);
    temp.fill(0);
    arr=Array.from(str);
    for(let i=0;i<length-1;i++){
        let n=1,j=i+1;
        while(j<=length){
            if(arr[j]===arr[i]){
                n++;
            }else{
                break;
            }
            j++;
        }
        temp[i]=n;
    }
    val=Math.max(...temp);
    index=temp.indexOf(val);
    return str[index].repeat(val)
}

// 网友一
function search(str){
    const regex = /(\w)\1+/g;
    let m, max = '';
    while ((m = regex.exec(str)) !== null) {
        m.index === regex.lastIndex && regex.lastIndex++;
        max = m[0].length>max.length ? m[0] : max;
    }
    return max
}

// 网友二
function search(input) {
    if (input.length <= 1) return input;
    let start = 0, length = 1;
    let len = 1;
    for (let end = 1; end < input.length; end++) {
        if (input.charAt(end) === input.charAt(end - 1)) len++;
        else {
            if (len > length) {
                start = end - len;
                length = len;
            }
            len = 1;
        }
    }
    if (len > length) return input.substr(input.length - len);
    return input.substr(start, length);
}

// 网友三
function search(str) {
    return str.match(/(\w)\1+/g).sort((x, y) => y.length - x.length)[0];
}