class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
  vector<int> awnser;
  for (int i = 0; i < nums.size(); i ++){
    for (int j = i + 1; j < nums.size(); j ++){
      if (nums[i] + nums[j] == target){
        awnser.push_back(i);
        awnser.push_back(j);
      }
    }
  }
  return awnser;
  }
};
