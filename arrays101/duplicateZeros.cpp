#include <iostream>
using namespace std;

int main (){
  int arr[] = {1, 0, 2, 3, 0, 4, 5, 0};
  for (int i = 0; i < arr.size(); i ++){
    if (arr[i] == 0){
      if (arr[i - 1] == 0){
        continue;
      }
      arr[i + 1] = 0;
    }
  }
}
