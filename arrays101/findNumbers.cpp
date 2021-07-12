class Solution {
public:
  int findNumbers(vector<int>& nums) {
    int count = 0;
    int countEven = 0;
    for (int i = 0; i < nums.size(); i ++){
      while (nums[i] != 0){
        nums[i] = nums[i] / 10;
        ++count;
      }
      if (count % 2 == 0){
        ++countEven;
      }
      count = 0;
    }
    return countEven;
  }
};
