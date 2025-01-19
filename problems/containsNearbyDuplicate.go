func containsNearbyDuplicate(nums []int, k int) bool {
    visited := make(map[int]int)
    for i, v := range nums {
        if prevIndex, exists := visited[v]; exists && i-prevIndex <= k {
            return true
        }
        visited[v] = i
    }
    return false
}
