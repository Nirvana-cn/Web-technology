//假设现在我希望传入一组学生的信息，来进行排序
//     [{ 'D': 90 }, { 'A': 20 }, { 'B': 50 }, { 'C': 10 }]
//希望输出
//     [{ 'C': 10 }, { 'A': 20 }, { 'B': 50 }, { 'D': 90 }]
//1.修改对象方法
[{name:'D',score: 90 }, { name:'A',score: 20 }, { name:'B','score': 50 }, { name:'C','score': 10 }].sort((a,b)=>{return a.score-b.score});
//2.使用Object.keys()方法
[{ 'D': 90 }, { 'A': 20 }, { 'B': 50 }, { 'C': 10 }].sort((a,b)=>{return a[Object.keys(a)]-b[Object.keys(b)]});