class Solution {
public:
  int findMaxConsecutiveOnes(vector<int>& nums) {
    int count = 0;
    int higher = 0;
    for (int i = 0; i < nums.size(); i ++){
      if (nums[i] == 1){
        ++count;
        if (higher < count){
          higher = count;
        }
      }
      if (nums[i] != 1){
        count = 0;
      }

    }
    return higher;
  }
};
