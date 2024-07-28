class Solution:
    def reverse(self, x: int) -> int:
        x = str(x)
        isNegative = False
        if '-' in x:
            x = x.replace('-', '')
            isNegative = True

        arr = list(x)
        arr.reverse()

        if isNegative:
            arr.insert(0, '-')

        reversed_int = int(''.join(arr))
        if reversed_int < -2**31 or reversed_int > 2**31 - 1:
            return 0

        return reversed_int
