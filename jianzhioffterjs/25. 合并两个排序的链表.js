/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
示例1：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
//  h 保存新链表的头节点
// 整体流程如下：

// 如果 pHead1 和 pHead2，均没遍历完：
// 如果 pHead1.val <= pHead2.val，那么当前 node 的 next 指向 pHead1。并且移动 pHead1 指针。
// 否则，当前 node 的 next 指向 pHead2，移动 pHead2 指针。
// 移动 node 指针
// 继续循环
// 否则，结束循环：
// 如果 pHead1 未遍历完，node 的 next 指向 pHead1
// 如果 pHead2 未遍历玩，node 的 next 指向 pHead2
// 时间复杂度是 O(N)，空间复杂度是 O(1)。代码如下：

// 作者：xin-tan
// 链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/solution/javascript-die-dai-fa-shi-xian-by-xin-tan/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(pHead1, pHead2) {
    if(!pHead1){
        return pHead2
    }else if(!pHead2){
        return pHead1
    }
    let preHead=new ListNode(-1)
    let node=preHead
    while (pHead1&&pHead2) {
        if(pHead1.val<=pHead2.val){
            node.next=pHead1
            pHead1=pHead1.next
        }else{
            node.next=pHead2
            pHead2=pHead2.next
        }
        node=node.next
    }
    if(pHead1){
        node.next=pHead1
    }else if(pHead2){
        node.next=pHead2
    }
    return preHead.next
}