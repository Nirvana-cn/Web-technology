var arr=[{
    id: 123456,
    sex: 0
},{
    id: 222222,
    sex: 1
},{
    id: 111111,
    sex: 1
},{
    id: 333333,
    sex: 0
}];

arr.sort(function (a, b) {
   if(a.sex===b.sex){
       return a.id-b.id
   } else{
       return a.sex-b.sex
   }
});