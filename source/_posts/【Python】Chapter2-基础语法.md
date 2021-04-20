---
title: '【Python】Chapter2:基础语法'
date: 2021-04-16 14:13:28
categories: "Python"
tags:
	- Python
urlname:
keywords: Python
---

Python 是一种计算机编程语言。计算机编程语言和我们日常使用的自然语言有所不同，最大的区别就是，自然语言在不同的语境下有不同的理解，而计算机要根据编程语言执行任务，就必须保证编程语言写出来的程序绝不能有歧义，所以任何一种编程语言都有自己的一套语法，编译器或者解释器就是负责把符合语法的程序代码转换成 CPU 能执行的机器码，然后执行。Python 也不例外。

<!-- more -->

#### 编码

由于计算机是美国人发明的，因此最早只有127个字符被编码到计算机中，包含大小写英文字母、数字和一些符号，这个编码被称为 *ASCII* 编码。后面中国制定了 *GB2312* 编码，将中文编了进去。这时可以想像全球有多少种文字，都在指定编码的话，难免会造成冲突，显示乱码，所以 *Unicode* 字符集应运而生，将所有语言都统一到一套编码里，这样就不会再出现乱码问题了。

现在最常用的是 *UCS-16* 编码，用两个字节表示一个字符（如果非常偏僻的字符，就需要4个字节）。但现在的问题是如果所写的文本都是英文的话，*Unicode* 编码要比 *ASCII* 编码多一倍多存储空间，所以本着节约的精神，又出现了把 *Unicode* 编码转化成“可变长编码”的*UTF-8* 编码。*UTF-8* 编码把一个 Unicode 字符根据不同的数字大小编码成 1-6 个字节，常用的英文字母被编码成1个字节，汉字通常是3个字节，只有很生僻的字符才会编译成4-6个字节。

| 字符 |  ASCII   |      Unicode      |           UTF-8            |
| :--: | :------: | :---------------: | :------------------------: |
|  A   | 01000001 | 00000000 01000001 |          01000001          |
|  中  |    x     | 01001110 00101101 | 11100100 10111000 10101101 |

默认情况下，Python3 的源码文件以 *UTF-8* 编码的，所有字符串都是 *unicode* 字符串。当然你也可以为源码文件指定不同的编码:

```python
# -*- coding: cp-1252 -*-  
```

> 这里使用了 *Windows-1252* 字符集中的字符编码，对应适应语言是保加利亚语、白俄罗斯语、马其顿语、俄语及埃塞维亚语。

#### 标识符

- 第一个字符必须是字母或下划线。
- 标识符的其他部分由字母、数字和下划线组成
- 标识符区分大小写

在 Python 3中，可以用中文作为变量名，非 *ASCII* 标识符是允许的了。

#### Python 保留字

即关键字，这里我们不能用作任何标识符的名称。可以通过 `keyword` 模块列出所有关键字。

```shell
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', '__peg_parser__', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

#### 注释

Python 中单行注释以 `#` 开头，直到该物理行结束。注释可以在行开头，或空白符之后，但不能在字符串中。注释用于阐明代码，Python 不解释注释。即：

```python
#!/usr/bin/python3
# 注释
print("Hello, Python!") # 注释
```

多行注释可以用多个 `#` 号，还有 `'''` 和 `"""` 。

```python
#!/usr/bin/python3

# 第一个注释
# 第二个注释

'''
第三个注释
第四个注释
'''

"""
第五个注释
第六个注释
"""
print("Hello, Python!")
```

#### 行与缩进

Python 最具特色的就是使用缩进来表示代码块，不需要使用大括号 `{}`。缩进没有规定是几个空格还是Tab，按照约定俗成的惯例，应该始终坚持使用 **4个空格** 的缩进。因为如果缩进的空格数不一致，会导致运行错误，故同一个代码块的语句必须包含相同的缩进空格数。

```python
if True:
    print("True")
else:
    print("False")
```

#### 多行语句

Python 通常是一行写完一条语句，但如果语句很长，可以使用反斜杠( \ ) 来实现多行语句，例如:

```python
total = item_one + \
        item_two + \
        item_three
```

#### 数字(Number)类型

Python 中数字有四种类型：整型、浮点型、布尔型、复数。

- **int (整数)** 如1，只有一种整数类型 *int*，表示为长整型，没有 Python2 中的 *Long*。
- **bool (布尔值)** 布尔值属于整数的子类型，与布尔代数的表示完全一致，一个布尔值只有 `True` 和 `False` 两种值，要么是 `True`，要么是 `False` .(**请注意大小写**) 布尔值可以用 `and` 、`or` 和 `not` 运算。
  - `and` 运算是与运算，只有所有都为 `True`，`and` 运算结果才是 `True` 。
  - `or` 运算是或运算，只要其中有一个为 `True`，`or` 运算结果就是 `True`。
  - `not` 运算是非运算，它是一个单目运算符，把 `True` 变成 `False`，`False` 变成`True`。
- **float (浮点数)** 即小数。如1.23、2e-2(科学计数法，把10用e代替) 整数和浮点数在计算机内部存储的方式是不同的，整数运算永远是精确的，而浮点数运算则可能会有四舍五入的误差。
- **complex (复数)** 复数包含实部和虚部，分别以一个浮点数表示，后缀 `j` 或 `J` 用于表示虚数。如 1 + 2j、1.1 +2.2j

#### 字符串(String)

除了数字，Python 还可以操作字符串。字符串有多种表现形式，用单引号('……')或双引号("……") 标注的结果相同。反斜杠 `\` 用于转义。

```shell
>>> 'spam eggs'
'spam eggs'
>>> 'doesn\'t'
"doesn't"
>>> "doesn't"
"doesn't"
>>> '"Yes," they said.'
'"Yes," they said.'
>>> "\"Yes,\" they said."
'"Yes," they said.'
>>> '"Isn\'t," they said.'
'"Isn\'t," they said.'
```

在交互式解释器会为输出的字符串加注引号，特殊字符使用反斜杠转义。虽然，有时输出的字符串看起来与输入的字符串不一样(外加的引号可能会改变)，但两个字符串是相同的。如果字符串中有单引号而没有双引号，该字符串外将加注双引号，反之，则加注单引号。 `print()` 函数输出的内容更加简洁易读，它会省略两边的引号，并输出转义后的特殊字符：

```shell
>>> "\"Yes,\" they said."
'"Yes," they said.'
>>> '"Isn\'t," they said.'
'"Isn\'t," they said.'
>>> print('"Isn\'t,", they said.')
"Isn't,", they said.
>>> s = 'First line.\nSecond line.'
>>> s
'First line.\nSecond line.'
>>> print(s)
First line.
Second line.
```

如果不希望前置 `\` 的字符转义成特殊字符，可以使用原始字符串，在引号前添加 `r` 即可:

```shell
>>> print('C:\some\name')
C:\some
ame
>>> print(r'C:\some\name')
C:\some\name
```

字符串字面值可以实现跨行连续输入。实现方式是用三引号：`"""..."""`  或 `'''...'''` ，字符串行尾会自动加上回车换行，如果不需要回车换行，在行尾添加 `\` 即可。

```shell
>>> print("""\
... Usage: thingy [OPTIONS]
...        -h                        Display this usage message
...        -H hostname               Hostname to connect to
... """)
Usage: thingy [OPTIONS]
       -h                        Display this usage message
       -H hostname               Hostname to connect to
```

字符串可以用 `+` 合并(粘到一起)，也可以用 `*` 重复:

```shell
>>> 3 * 'un' + 'ium'
'unununium'
```

相邻的两个或多个*字符串字面值* (引号标注的字符)会自动合并：

```shell
>>> 'Py' 'thon'
'Python'
```

拆分长字符串时，这个功能特别实用：

```shell
>>> text = ('Put serveral strings within parentheses '
...         'to have them joined together.')
>>> text
'Put serveral strings within parentheses to have them joined together.'
```

> 这项功能只能用于两个字面值，不能用于变量或表达式。

合并多个变量，或合并变量与字面值，要用 `+` ：

```shell
>>> prefix = 'Py'
>>> prefix + 'thon'
'Python'
```

字符串支持 *索引* (下标访问)，第一个字符的索引是0。单字符没有专用的类型，就是长度为一的字符串：

```shell
>>> word = 'Python'
>>> word[0]
'P'
>>> word[5]
'n'
```

索引还支持负数，用负数索引时，从右边开始计数：

```shell
>>> word[-1]
'n'
>>> word[-2]
'o'
>>> word[-6]
'P'
```

> 注意，-0 和 0 一样，因此，负数索引从 -1开始。

除了索引，字符串还支持 *切片*。索引可以提取单个字符，*切片* 则提取子字符串：

```shell
>>> word[0:2]
'Py'
>>> word[2:5]
'tho'
```

> 注意，输出结果包含切片开始，但不包含切片结束。因此，`s[:i] + s[i:]` 总是等于 `s`：

```shell
>>> word[:2] + word[2:]
'Python'
>>> word[:4] + word[4:]
'Python'
```

切片索引的默认值很有用；省略开始索引时，默认值为0，省略结束索引时，默认为到字符串的结尾：

```shell
>>> word[:2]
'Py'
>>> word[4:]
'on'
>>> word[-2:]
'on'
```

还可以这样理解切片，索引指向的是字符之间，第一个字符的左侧标为0，最后一个字符的右侧标为 n, n 是字符串长度。

```shell
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1
```

第一行数字是字符串中索引 0...6 的位置，第二行数字是对应的负数索引位置。i 到 j 的切片由 i 和 j 之间所有对应的字符组成。

对于使用非负索引的切片，如果两个索引都不越界，切片长度就是起止索引之差。例如，`word[1:3]` 的长度是2。

索引越界会报错，但是切片会自动处理越界索引：

```shell
>>> word[42]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
>>> word[4:42]
'on'
>>> word[42:]
''
```

Python 字符串不能修改，是 *immutable*(不可变) 的。因此，为字符串中某个索引位置赋值会报错：

```shell
>>> word[0] = 'J'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```

要生成不同的字符串，应新建一个字符串：

```shell
>>> 'J' + word[1:]
'Jython'
```

内置函数 `len()` 返回字符串的长度：

```shell
>>> s = 'laaaaalalallalalalalalallalala'
>>> len(s)
30
```

#### 空行

函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。

空行与代码缩进不同，空行并不是 Python 语法的一部分。书写时不插入空行，Python解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。

> 空行也是程序代码的一部分。

#### 输入

Python提供了 `input()` 函数进行输入，并将之存放到一个变量里：

```shell
>>> name = input()
RainTwo
>>> name
'RainTwo'
```

可以在 `input()` 中添加字符串来进行提示:

```shell
>>> name = input('请输入名字:')
请输入名字:RainTwo
>>> name
'RainTwo'
```

#### 多个语句构成代码组

缩进相同的一组语句构成一个代码块，我们称之为代码组。

像 `if`、`while`、`def` 和 `class`这样的复合语句，首行以关键字开始，以冒号(:)结束，该行之后的一行或多行代码构成代码组。

我们将首行及后面的代码组称为一个子句(*clause*)。

```shell
>>> do = True
>>> if do :
...     print("做了")
... else:
...     print("没做")
...
做了
```

> 这里注意要缩进。

#### import 与 from...import

在 Python 中用 `import` 或者 `from...import` 来到如相应的模块。

将整个模块(*somemodule*)导入，格式为：`import somemodule` 

从某个模块中导入某个函数，格式为：`from somemodule import somefunction`

从某个模块中导入多个函数，格式为：`from somemodule import firstfunc, secondfunc, thirdfunc`

将某个模块中的函数全部导入，格式为：`from somemodule import *`

将某个模块换个别名，格式为：`import flask as fl`

```python
import sys
from sys import argv, path
```

