class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        l1_reverse = ''
        l2_reverse = ''

        while l2 is not None or l1 is not None:
            if l1 is not None:
                l1_reverse = str(l1.val) + l1_reverse
                l1 = l1.next
            if l2 is not None:
                l2_reverse = str(l2.val) + l2_reverse
                l2 = l2.next

        sum = int(l1_reverse) + int(l2_reverse)
        sum = list(str(sum))
        sum.reverse()

        head = ListNode(sum[0])
        curr = head
        for num in sum[1:]:
            curr.next = ListNode(num)
            curr = curr.next

        return head
