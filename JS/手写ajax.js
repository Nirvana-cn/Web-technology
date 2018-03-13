function getXhr() {
    let xhr=null
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest()
    }else{
        xhr=new ActiveXObject("Microsoft.XMLHttp")
    }
    return xhr;
}

let xhr=getXhr();
xhr.open('method','url');
xhr.send('data');
xhr.onreadystatechange=function () {
    if(xhr.readyState==4 && xhr.status==200){
        let data=xhr.responseText;
    }
}