func containsDuplicate(nums []int) bool {
    visited := make(map[int]bool)
    for _, v := range nums {
        if visited[v] {
            return true
        }
        visited[v] = true
    }
    return false
}

