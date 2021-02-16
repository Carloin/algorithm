// 双指针
// 时间O(n): 遍历一遍长串，n 为长串的字符数
const isSubsequence = (subStr, str) => {
    if (subStr.length == 0) return true;
    let index = 0;
    let subIndex = 0;
    while (index < str.length) {           
      if (subStr[subIndex] == str[index]) {
        subIndex++;                         
        if (subIndex > subStr.length - 1) { 
          return true;                      
        }
      }         
      index++;   
    }
    return false;
  };
