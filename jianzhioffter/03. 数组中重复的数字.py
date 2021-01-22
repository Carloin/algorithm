# -*- codeing = uth-8 -*-
# @time:2021/1/22 10:19
# File:03. 数组中重复的数字.py
# @Software:PyCharm
# @Author:hft
# 示例 1：
#
# 输入：
# [2, 3, 1, 0, 2, 5, 3]
# 输出：2 或 3
# set哈希
class Solution:
    def findRepeatNumber(self, nums: [int]) -> int:
        dic=set()
        for num in nums:
            if num in dic:return num
            dic.add(num)
        return -1
