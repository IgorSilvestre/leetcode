/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return null

    let sorted = []
    while (list1 && list2) {
        if (list1.val > list2.val) {
            sorted.push(list2.val)
            list2 = list2.next
        } else {
            sorted.push(list1.val)
            list1 = list1.next
        }
    }

    while (list1) {
        sorted.push(list1.val)
        list1 = list1.next
    }
    while (list2) {
        sorted.push(list2.val)
        list2 = list2.next
    }

    let sortedNode
    for (let i = sorted.length - 1; i >= 0; i--) {
        sortedNode = new ListNode(sorted[i], sortedNode)
    }

    return sortedNode
}
