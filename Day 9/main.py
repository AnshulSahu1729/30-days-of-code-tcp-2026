class Solution:
    def largestOddNumber(self, num: str) -> str:
        l1=[] 
        for i in ["1","3","5","7","9"]:
            index=num.rfind(i)
            l1.append(index)
        o=max(l1)
        return num[0:o+1]