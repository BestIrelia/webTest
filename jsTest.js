// 数组去重
function getNoRepeatArr(arr) {
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(result.indexOf(arr[i])===-1){
            result.push(arr[i]);
        }
    }
    console.log('数组去重',result);
}
var testArr=[1,2,3,4,1,5,3,6,78,44,44,6,5,9];
getNoRepeatArr(testArr);

//求字符串出现次数最多的字符
function getChar(str) {
    var obj={};
    for(var i=0;i<str.length;i++){
        // console.log(str.charAt(i));//charAt(i)获取字符串i位置上的字符
        var char=str.charAt(i);
        if(obj[char]){
            obj[char]++;
        }else {
            obj[char]=1;//如果对象obj中没有char的字符属性，就使用该语句添加到对象
        }
    }
    // console.log(obj)
    var max=0;
    for(var key in obj){
        if(max<obj[key]){
            max=obj[key];
        }
    }
    console.log(max);
    for(var key in obj){
        if(obj[key]===max){
            console.log("重复最多的字符是",key)
        }
    }
}
var testStr="abccdegtgg";
getChar(testStr);

function getQueryString(url) {
    var params=url.split('?')[1].split('&');
    // console.log(params);
    for(var obj={},arr=[],i=0;i<params.length;i++){
        arr=params[i].split('=');
        // console.log(arr);
        obj[arr[0]]=arr[1];

    }
    console.log(obj);
}
var urlTest="www.baidu.com?a=1&b=2&c=4";
getQueryString(urlTest);

// 遍历函数map
var arr=[1,2,4,3,8,2];
// es5
console.log('es5');
arr.map(function (item,i) {
    // console.log(item);
    console.log(i);
});
console.log('es6');
arr.map((item,i)=>{
    console.log(item);
    // console.log(i);
});

//字符和Unicode相互装换
var str='中文';
var code=str.charCodeAt(1);
console.log(code);
var str1=String.fromCharCode(code);
console.log(str1);