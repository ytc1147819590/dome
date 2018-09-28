/**
 * Created by Administrator on 2018/9/27.
 */

//var funcs = []
//for (var i = 0; i < 10; i++) {
//    funcs.push(function() { console.log(i) })
//}
//
//funcs.forEach(function(func,k,i) {
//
//    console.log(func)
//    console.log(k)
//    console.log(i)
//})
//func为每次循环数组的元素
//k为每次循环数组的索引
//i为每次循环的原来数组
// 10 10 10 10 10 10 10 10 10 10


const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs.forEach(func => func())

//箭头函数后面不加大括号，默认只能有一行代码，默认return;
//箭头函数后面加大括号，默认没有return;

//默认一个参数
// 0 1 2 3 4 5 6 7 8 9
