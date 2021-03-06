var nextGreaterElement = function(nums1, nums2) {
    //整体思路：
    //1.维护一个单调递减的栈，如果遇到比栈顶大的元素就是第一个比自己大的了
    //2.那么用key表示当前的数，nums[i]表示比key大的第一个数
    //3.枚举nums1找存在的key里的value值即可
     let map = new Map()
     let res = []
     let m = nums2.length
     let stack = []
     for(let i = 0; i < m; i++){
       //栈顶元素存在，并且当前的元素大于栈顶  
       while(stack.length && nums2[i] > stack[stack.length - 1]){
         map.set(stack.pop(), nums2[i]) 
       }  
       stack.push(nums2[i])
     }
     //栈内还有元素，说明后面没有比自己小的了
     while(stack.length){
       map.set(stack.pop(), -1)
     }
     nums1.forEach(item => {
       res.push(map.get(item))
     })
     return res
   };
