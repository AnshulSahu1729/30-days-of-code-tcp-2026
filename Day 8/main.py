class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums)==0:
            return 0
        if len(nums)==1:
            return 1
        nums=set(nums)
        nums=list(nums)
        nums.sort()
        maxlength=[]
        count=1
        for j in range(len(nums)-1):
            if nums[j]+1==nums[j+1]:
                count+=1
            else:
                if count!=1:
                    maxlength.append(count)
                    count=1
        maxlength.append(count)
        return max(maxlength)