# -*- codeing = uth-8 -*-
# @time:2021/1/22 10:36
# File:05. 替换空格.py
# @Software:PyCharm
# @Author:hft
# 示例 1：
#
# 输入：s = "We are happy."
# 输出："We%20are%20happy."
class Solution:
    def replaceSpace(self, s: str) -> str:
        return ''.join(('%20' if c==' ' else c for c in s))
