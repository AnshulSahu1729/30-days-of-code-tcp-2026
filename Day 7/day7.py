class Solution(object):
    def sumOfEncryptedInt(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def encrypt(num):
            num1=num
            num2=num
            maxnum=0
            rem=0
            while num1>0:
                rem=num1%10
                if rem>maxnum:
                    maxnum=rem
                num1=num1//10
            req_num=0
            while num2>0:
                num2=num2//10
                req_num+=maxnum
                if num2>0:
                    req_num*=10
            return req_num

        sum=0
        for num in nums:
            a=encrypt(num)
            sum+=a
        return sum