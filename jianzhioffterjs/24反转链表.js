/**
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var reverseList = function(head) {
//    var prev=null,cur=head,temp
//    while (cur) {
//        temp=cur.next
//        cur.next=prev
//        prev=cur
//        cur=temp
//    }
//    return prev
    [curr,pre]=[head,null]
    while (curr) {
        [curr.next,pre,curr]=[pre,curr,curr.next]
    }
};
print(reverseList([1,2,3,4,5,null]))