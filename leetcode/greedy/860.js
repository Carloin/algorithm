/**
 * 由于顾客只可能给你三个面值的钞票，而且我们一开始没有任何钞票，因此我们拥有的钞票面值只可能是 55 美元，1010 美元和 2020 美元三种。基于此，我们可以进行如下的分类讨论。
5 美元，由于柠檬水的价格也为 55 美元，因此我们直接收下即可。

10 美元，我们需要找回 55 美元，如果没有 55 美元面值的钞票，
则无法正确找零。

20 美元，我们需要找回 1515 美元，此时有两种组合方式，
一种是一张 1010 美元和 55 美元的钞票，一种是 33 张 55 美元的钞票，
如果两种组合方式都没有，则无法正确找零。当可以正确找零时，
两种找零的方式中我们更倾向于第一种，即如果存在 55 美元和 1010 美元，
我们就按第一种方式找零，否则按第二种方式找零，
因为需要使用 55 美元的找零场景会比需要使用 1010 美元的找零场景多，
我们需要尽可能保留 55 美元的钞票。

基于此，我们维护两个变量 five 和 ten 表示当前手中拥有的 55 美元和 1010 美元钞票的张数，从前往后遍历数组分类讨论即可。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/lemonade-change/solution/ning-meng-shui-zhao-ling-by-leetcode-sol-nvp7/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
let five = 0,
    ten = 0;
for (const bill of bills) {
    if (bill === 5) {
        five += 1;s
    } else if (bill === 10) {
        if (five === 0) {
            return false;
        }
        five -= 1;
        ten += 1;
    } else {
        if (five > 0 && ten > 0) {
            five -= 1;
            ten -= 1;
        } else if (five >= 3) {
            five -= 3;
        } else {
            return false;
        }
    }
}
return true;