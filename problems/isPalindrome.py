#Follow up: Could you solve it without converting the integer to a string?
class Solution:
    def isPalindrome(self, x: int) -> bool:
        
        count = 0
        temp = x
        while int(temp) != 0:
            temp = int(temp / 10)
            count += 1

        result = 0
        temp_division = x
        for i in range(count):
            temp_single_digit = temp_division % 10
            temp_division = int(temp_division / 10)
            result = (result * 10) + temp_single_digit
        
        if result == x:
            return True
        else:
            return False