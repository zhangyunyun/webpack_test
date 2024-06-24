/* 
   主模块js文件
*/
//测试
console.log("entry is working");

//分别暴露的文件，使用结构赋值的形式引入文件
import {foo, bar} from '../js/math'
//引入json文件需要用一个变量data(任意名)接收一下
import data from '../data/test.json'

//引入样式
import '../css/test.css'

//调用其他引入模块文件中的方法、数据
console.log(foo(3));
console.log(bar(3));

console.log(typeof data);
console.log(JSON.stringify(data));
console.log(typeof data);

