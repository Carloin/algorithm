// 直接排序
var getLeastNumbers = function(arr, k) {
    arr.sort((a,b)=>{
        return a-b
    })
    return arr.slice(0,k)
    };